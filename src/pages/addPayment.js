// src/components/AddPaymentForm.js
import React, { useState } from 'react';

const addPayment = () => {
  const [form, setForm] = useState({
    phoneNo: '',
    memberId: '',
    name: '',
    relation: '',
    fatherName: '',
    naam: '',
    sambandh: '',
    account: '',
    specialOccasion: '',
    isSpecialOccasion: false,
    amount: '',
    tnxDetail: '',
    tnxDate: '',
    modeOfPayment: '',
    shikshaNidhi: '',
    monthCovered: '',
    monthlyShare: '',
    payVerifiedStatus: '',
    remark: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Payment</h2>

      <label>
        Phone No.
        <input type="text" name="phoneNo" value={form.phoneNo} onChange={handleChange} />
      </label>

      <h3>Add User Detail</h3>

      <label>
        Member ID:
        <input type="text" name="memberId" value={form.memberId} onChange={handleChange} />
      </label>

      <label>
        Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} />
      </label>

      <label>
        Relation:
        <input type="text" name="relation" value={form.relation} onChange={handleChange} />
      </label>

      <label>
        Father Name:
        <input type="text" name="fatherName" value={form.fatherName} onChange={handleChange} />
      </label>

      <label>
        नाम:
        <input type="text" name="naam" value={form.naam} onChange={handleChange} />
      </label>

      <label>
        संबंध:
        <input type="text" name="sambandh" value={form.sambandh} onChange={handleChange} />
      </label>

      <h3>Add New Payment Detail</h3>

      <label>
        Account:
        <input type="text" name="account" value={form.account} onChange={handleChange} />
      </label>

      <label>
        Special Occasion:
        <input type="text" name="specialOccasion" value={form.specialOccasion} onChange={handleChange} />
      </label>

      <label>
        Is Special Occasion:
        <input type="checkbox" name="isSpecialOccasion" checked={form.isSpecialOccasion} onChange={handleChange} />
      </label>

      <label>
        Amount Rs.:
        <input type="number" name="amount" value={form.amount} onChange={handleChange} />
      </label>

      <label>
        Tnx Detail (UTR/ID):
        <input type="text" name="tnxDetail" value={form.tnxDetail} onChange={handleChange} />
      </label>

      <label>
        Tnx Date:
        <input type="date" name="tnxDate" value={form.tnxDate} onChange={handleChange} />
      </label>

      <label>
        Mode of Payment:
        <input type="text" name="modeOfPayment" value={form.modeOfPayment} onChange={handleChange} />
      </label>

      <label>
        SHIKSHA NIDHI:
        <input type="text" name="shikshaNidhi" value={form.shikshaNidhi} onChange={handleChange} />
      </label>

      <label>
        Month Covered:
        <input type="text" name="monthCovered" value={form.monthCovered} onChange={handleChange} />
      </label>

      <label>
        Monthly Share(Rs.):
        <input type="number" name="monthlyShare" value={form.monthlyShare} onChange={handleChange} />
      </label>

      <label>
        Pay Verified Status:
        <input type="text" name="payVerifiedStatus" value={form.payVerifiedStatus} onChange={handleChange} />
      </label>

      <label>
        Remark:
        <input type="text" name="remark" value={form.remark} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPaymentForm;
