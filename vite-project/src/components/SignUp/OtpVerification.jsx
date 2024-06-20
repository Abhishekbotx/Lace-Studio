import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const OtpVerificationPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const email = queryParams.get('email');
  const password = queryParams.get('password');
  const fullName = queryParams.get('fullName');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const [isTimeOver, setIsTimeOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    console.log(email, password, fullName);
    if (!isTimeOver) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimeOver]);

  useEffect(() => {
    const fetchOtp = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/v1/generate", { email }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });

        console.log('response', response);

        // if (response.data.success) {
        //   navigate('/signin');
        // }
      } catch (error) {
        console.error('Error fetching OTP:', error);
      }
    };

    if (email) {
      fetchOtp();
    }
  }, [email]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsTimeOver(true);
    }
  }, [timeRemaining]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (index < 5 && value !== '') {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredCode = code.join('');

    try {
      console.log('submit hit');
      const response = await axios.post("http://localhost:3001/api/v1/signup",
        {
          otp: enteredCode,
          email: email,
          password: password,
          fullName: fullName
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });

      if (response.data.success) {
        navigate('/signin');
      } else {
        console.log('Invalid verification code');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    const enteredCode = code.join('');

    try {
      console.log('submit hit');
      const response = await axios.post("http://localhost:3001/api/v1/signup",
        {
          otp: enteredCode,
          email: email,
          password: password,
          fullName: fullName
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });

      if (response.status===200) {
        navigate('/signin');
      } else {
        console.log('Invalid verification code');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput.focus();
    }
  };

  const handleResend = () => {
    setTimeRemaining(120);
    setIsTimeOver(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-slate-100">
      <div className="relative mb-8">
        <a href="/" className="custom-color1 poppins text-6xl font-bold text-black mt-4">
          Lace Studio
        </a>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl raleway-sm mb-4 text-zinc-700 text-center">Otp Verification</h1>
        <p className="text-gray-600 mb-6 text-center">Enter 6 digits code received on your mail.</p>
        <form onSubmit={handleSubmit} className="flex justify-center mb-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  handleBackspace(index);
                }
              }}
              className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </form>
        {isTimeOver ? (
          <p className="custom-color1 text-center mb-4">Time over! Please click on resend.</p>
        ) : (
          <p className="text-gray-600 text-center mb-4">{formatTime(timeRemaining)}</p>
        )}
        <button
          type="button"
          className="bg-yellow-200 hover:bg-yellow-600 text-zinc-400 font-bold py-2 px-4 rounded w-full mb-4"
          disabled={isTimeOver}
          onClick={handleContinue}
        >
          Continue
        </button>
        <p className="text-center">
          <span>Didn't receive the code? &nbsp;
            <a
              href="#"
              className="custom-color1 hover:text-pink-800"
              onClick={handleResend}
            >
              Resend
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
