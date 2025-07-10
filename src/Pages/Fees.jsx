// src/Pages/FeesPage.jsx
import React from 'react';
import './Fees.css';

const FeesPage = () => {
  const courseName = "Full Stack Web Development";
  const totalFees = 45000;
  const paid = 30000;
  const remaining = totalFees - paid;

  const feesPlan = [
    { installment: 1, amount: 15000, dueDate: '10 Jan 2025', status: 'Paid' },
    { installment: 2, amount: 15000, dueDate: '10 Feb 2025', status: 'Paid' },
    { installment: 3, amount: 15000, dueDate: '10 Mar 2025', status: 'Unpaid' },
  ];

  return (
    <div className="fees-page">
      <h1 className="fees-title">💰 Course Fees Overview</h1>

      <div className="fees-summary">
        <h2>{courseName}</h2>
        <div className="fees-boxes">
          <div className="box total">Total Fees: ₹{totalFees}</div>
          <div className="box paid">Paid: ₹{paid}</div>
          <div className="box remaining">Remaining: ₹{remaining}</div>
        </div>
      </div>

      <h2 className="plan-heading">📋 Fees Installment Plan</h2>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Installment</th>
            <th>Amount (₹)</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {feesPlan.map((item, index) => (
            <tr key={index}>
              <td>{item.installment}</td>
              <td>{item.amount}</td>
              <td>{item.dueDate}</td>
              <td className={item.status === 'Paid' ? 'paid-status' : 'unpaid-status'}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="note-box">
        <h3>📌 Note:</h3>
        <p>
          Please ensure all dues are cleared before the final examination. Late payments may lead to penalty or suspension of classes.
        </p>
      </div><br /><br /><br />
      <h2 className="plan-heading">💳 Online Payment Options</h2><br /><br />
<div className="payment-plans"><br /><br /><br /><br />
  <div className="plan-card">
    
    <h3>🏆 One-Time Full Payment</h3>
    <p>Pay ₹{totalFees} at once and get <strong>10% discount</strong>.</p>
    <p><strong>Final Amount: ₹{Math.round(totalFees * 0.9)}</strong></p>
    <button className="pay-btn">Pay Now</button>
  </div>

  <div className="plan-card">
    <h3>📆 3-Month EMI Plan</h3>
    <p>Split your payment into 3 months with 0% interest.</p>
    <p><strong>₹{Math.round(totalFees / 3)} / month</strong></p>
    <button className="pay-btn">Choose Plan</button>
  </div>

  <div className="plan-card">
    <h3>🗓️ 6-Month EMI Plan</h3>
    <p>Flexible payment with small monthly installments.</p>
    <p><strong>₹{Math.round(totalFees / 6)} / month</strong></p>
    <button className="pay-btn">Choose Plan</button>
  </div>
</div>

    </div>
  );
};

export default FeesPage;
