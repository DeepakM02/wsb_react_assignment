import DatePicker from 'react-datepicker'
import React, { useState } from 'react';
import { Input } from 'reactstrap';

const DatePickerInput = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
        <Input type="select" className="inputClassName" onClick={onClick} placeholder={value}>
            <option disabled={true}>{value}</option>
        </Input>
    );
    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="Select a Date"
            className="col-md-12"
            customInput={<ExampleCustomInput value="Select a Date" onClick={null} />}
        />
    );
}
export default DatePickerInput;

