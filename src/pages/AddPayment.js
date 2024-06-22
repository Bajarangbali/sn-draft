import React, { useState } from 'react';
import { Select, DatePicker } from 'antd';
import moment from 'moment';

const { Option } = Select;

const AddPayment = () => {
  // State to manage payment details
  const [paymentDetails, setPaymentDetails] = useState({
    phoneNo: '', // Example default value
    userName: '',
    relation: '',
    fatherName: '',
    userNameHindi: '',
    relationHindi: '',
    fatherNameHindi: '',
    bankAccount: 'ABRSVS(SHIKSHA NIDHI)-9078(SBI)', // Example default value
    amount: '',
    transactionDetails: '',
    transactionDate: null,
    modeOfPayment: '',
  });

  // Options for bank accounts
  const accountOptions = [
    { value: 'ABRSVS(SHIKSHA NIDHI)-9078(SBI)', label: 'ABRSVS(SHIKSHA NIDHI)-9078(SBI)' },
    { value: 'ABRSVS(M_GAUSHALA)-4937(SBI)', label: 'ABRSVS(M_GAUSHALA)-4937(SBI)' },
    { value: 'ABRSVS(ENVIRONMENT)-9598(AXIS)', label: 'ABRSVS(ENVIRONMENT)-9598(AXIS)' },
    { value: 'SKSS_BADLI(80G)', label: 'SKSS_BADLI(80G)' },
    { value: 'Any Other', label: 'Any Other' },
  ];

  // Function to handle bank account selection
  const handleAccountSelect = (value) => {
    setPaymentDetails({ ...paymentDetails, bankAccount: value });
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [id]: value });
  };

  const handleDateChange = (date) => {
    setPaymentDetails({ ...paymentDetails, transactionDate: date });
  };

  const handleSelectChange = (value) => {
    setPaymentDetails({ ...paymentDetails, modeOfPayment: value });
  };

  // Function to handle payment addition
  const handleAddPayment = () => {
    // Implement your logic to add payment (e.g., API call, state update)
    console.log('Payment Details:', paymentDetails);
    // Reset form state or perform any necessary actions after adding payment
  };

  const paymentModes = ['UPI', 'NEFT', 'RTGS', 'Cash', 'Cheque'];

  return (
    <div className="ant-card criclebox tablespace mb-24">
      <div className="ant-card-head">
        <div className="ant-card-head-wrapper">
          <div className="ant-card-head-title">Add Payment</div>
        </div>
      </div>
      <div className="ant-card-body">
        {/* Display payment details and inputs */}
        <div className="ant-row">
          <div className="ant-col ant-col-xs-24">
            {/* Example input field for phone number */}
            <div className="ant-form-item phone_no">
              <label htmlFor="phone_no" className="ant-form-item-required" title="Phone No.">
                Phone No.
              </label>
              <input
                placeholder="Phone no."
                id="phoneNo"
                className="ant-input"
                type="text"
                value={paymentDetails.phoneNo}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Add User Detail Section */}
          <div className="ant-col ant-col-xs-24">
            <h5 className="ant-typography" style={{ display: 'inline-block', marginRight: '8px' }}>
              Add User Detail
            </h5>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>- Member ID: </span>
          </div>

          {/* Example input fields for user details */}
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="userName" className="ant-form-item-required" title="User Name">
                User Name
              </label>
              <input
                placeholder="User name"
                id="userName"
                className="ant-input"
                type="text"
                value={paymentDetails.userName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="relation" className="ant-form-item-required" title="Relation">
                Relation
              </label>
              <input
                placeholder="Relation"
                id="relation"
                className="ant-input"
                type="text"
                value={paymentDetails.relation}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="fatherName" className="ant-form-item-required" title="Father Name">
                Father Name
              </label>
              <input
                placeholder="Father name"
                id="fatherName"
                className="ant-input"
                type="text"
                value={paymentDetails.fatherName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Example input fields for Hindi details */}
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="userNameHindi" className="ant-form-item-required" title="User Name (Hindi)">
                नाम
              </label>
              <input
                placeholder="User name (Hindi)"
                id="userNameHindi"
                className="ant-input"
                type="text"
                value={paymentDetails.userNameHindi}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="relationHindi" className="ant-form-item-required" title="Relation (Hindi)">
                सम्बन्ध
              </label>
              <input
                placeholder="Relation (Hindi)"
                id="relationHindi"
                className="ant-input"
                type="text"
                value={paymentDetails.relationHindi}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-4">
            <div className="ant-form-item">
              <label htmlFor="fatherNameHindi" className="ant-form-item-required" title="Father Name (Hindi)">
                पिता
              </label>
              <input
                placeholder="Father name (Hindi)"
                id="fatherNameHindi"
                className="ant-input"
                type="text"
                value={paymentDetails.fatherNameHindi}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Add Payment Detail Section */}
          <div className="ant-col ant-col-xs-24">
            <h5 className="ant-typography" style={{ display: 'inline-block', marginRight: '8px' }}>
              Add New Payment Detail
            </h5>
          </div>

          {/* Bank Account Field */}
          <div className="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-lg-12">
            <div className="ant-form-item">
              <label htmlFor="bankAccount" className="ant-form-item-required" title="Bank Account">
                Bank Account
              </label>
              <Select
                placeholder="Select bank account"
                value={paymentDetails.bankAccount}
                onChange={handleAccountSelect}
              >
                {accountOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          {/* Payment Details Fields */}
          <div className="ant-col ant-col-xs-24 ant-col-sm-24">
            <div className="ant-row" gutter={16}>
              <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-6">
                <div className="ant-form-item">
                  <label htmlFor="amount" className="ant-form-item-required" title="Amount">
                    Amount (Rs)
                  </label>
                  <input
                    placeholder="Enter amount"
                    id="amount"
                    className="ant-input"
                    type="text"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-6">
                <div className="ant-form-item">
                  <label htmlFor="transactionDetails" className="ant-form-item-required" title="Transaction Details">
                    Transaction Details (UTR, UPI, etc.)
                  </label>
                  <input
                    placeholder="Enter transaction details"
                    id="transactionDetails"
                    className="ant-input"
                    type="text"
                    value={paymentDetails.transactionDetails}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-6">
                <div className="ant-form-item">
                  <label htmlFor="transactionDate" className="ant-form-item-required" title="Transaction Date">
                    Transaction Date
                  </label>
                  <DatePicker
                    id="transactionDate"
                    className="ant-datepicker"
                    value={paymentDetails.transactionDate ? moment(paymentDetails.transactionDate) : null}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
              <div className="ant-col ant-col-xs-24 ant-col-sm-12 ant-col-lg-6">
                <div className="ant-form-item">
                  <label htmlFor="modeOfPayment" className="ant-form-item-required" title="Mode of Payment">
                    Mode of Payment
                  </label>
                  <Select
                    placeholder="Select mode of payment"
                    value={paymentDetails.modeOfPayment}
                    onChange={handleSelectChange}
                  >
                    {paymentModes.map((mode) => (
                      <Option key={mode} value={mode}>
                        {mode}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button to add payment */}
        <div className="ant-row" style={{ marginTop: '20px' }}>
          <div className="ant-col">
            <button className="ant-btn ant-btn-primary" onClick={handleAddPayment}>
              Add Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
