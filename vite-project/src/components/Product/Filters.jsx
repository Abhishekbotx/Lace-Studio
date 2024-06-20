import { FormControl, FormGroup, FormControlLabel, FormLabel } from '@mui/material';
import CustomCheckbox from './CustomCheckbox';

const Filters = ({ filters, handleFilterChange }) => {
    return (
        <div className="w-1/4 pr-4">
            <h3 className="text-lg font-semibold mb-4 roboto-slab">Filters</h3>
            <FormControl component="fieldset" className="mb-4">
                <FormLabel component="legend" className="font-semibold mb-2 roboto-slab">Brand</FormLabel>
                <FormGroup>
                    {['Zara', 'Gucci', 'H&M', 'Reebok', 'Puma', 'Nike', 'New Balance'].map((brand) => (
                        <FormControlLabel
                            key={brand}
                            control={
                                <CustomCheckbox
                                    checked={filters.brand.includes(brand.toLowerCase())}
                                    onChange={() => handleFilterChange('brand', brand.toLowerCase())}
                                />
                            }
                            label={<div className='poppins'>{brand}</div>}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <div className='flex flex-col'>
            <FormControl component="fieldset" className="mb-4">
                <FormLabel component="legend" className="font-semibold mb-2 roboto-slab">Occasion</FormLabel>
                <FormGroup>
                    {['Casual', 'Wedding', 'Reception', 'Sangeet', 'Mehendi'].map((occasion) => (
                        <FormControlLabel
                            key={occasion}
                            control={
                                <CustomCheckbox
                                    checked={filters.occasion.includes(occasion.toLowerCase())}
                                    onChange={() => handleFilterChange('occasion', occasion.toLowerCase())}
                                />
                            }
                            label={<div className='poppins'>{occasion}</div>}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className="mb-4">
                <FormLabel component="legend" className="font-semibold mb-2 roboto-slab">Size</FormLabel>
                <FormGroup>
                    {['Small', 'Medium', 'Large', 'Plus Size'].map((size) => (
                        <FormControlLabel
                            key={size}
                            control={
                                <CustomCheckbox
                                    checked={filters.size.includes(size.toLowerCase().replace(' ', '-'))}
                                    onChange={() => handleFilterChange('size', size.toLowerCase().replace(' ', '-'))}
                                />
                            }
                            label={<div className='poppins'>{size}</div>}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            </div>
        </div>
    );
};

export default Filters;
