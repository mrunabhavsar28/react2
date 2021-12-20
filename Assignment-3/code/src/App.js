import React from 'react';
import logo from './logo.svg';
import './App.css';
var arrow = "<"
var rightArrow = ">"
var status={
  1:'suspended',
  2:'completed',
  3:'cancelled'
}
var orderDetails={
  'name':'Allen Ford',
  'employeeid':123456789,
  'appointmenton':new Date(567812345567).toLocaleString(),
  'email':'person@example.com',
  'phone':23456789,
  'status':status[1],
  'Door':'Mark',
  'Time':new Date(12345678).toLocaleString(),
  'avatar':'https://www.w3schools.com/howto/img_avatar.png',
  'title':'hey this is the text',
  'description':'this is the text this this this this this this',
}
const App = () => {
  return (
  <div className="site-container">
      <div className='order-details'>
        <div className='nav'>
          <div className='nav-container'>
            <a href="#" className='nav-arrow arrow'>{arrow}</a>
            <h1 className='nav-title'>{orderDetails.name}</h1>
            <span className='nav-text'>{orderDetails.employeeid}</span>
            <button className='btn nav-btn'>Print</button>
          </div>
        </div>
        <div className='container'>
          <div className='customer-info block'>
            <p className='text'>
              <span> Appointment On</span>
              {
                orderDetails.appointmenton
              }
            </p>
            <p className='text'>
              <span> Email</span>
              {
                orderDetails.email
              }
            </p>
            <p className='text'>
              <span> Phone</span>
              {
                orderDetails.phone
              }
            </p>
          </div>
          <div className='order-info grid block'>
            <div className='unit one-third'>
              <p className='text text-label'>Status</p>
              <p className='text order-status'>{orderDetails.status}</p>
            </div>
            <div className='unit one-third'>
              <p className='text text-label'>Door</p>
              <p className='text order-status'>{orderDetails.Door}</p>
            </div>
            <div className='unit one-third'>
              <p className='text text-label'>Time</p>
              <p className='text order-status'>{orderDetails.Time}</p>
            </div>
          </div>
          <ul className='product-list block'>
            <li className='product'>
              <label className='img custom-checkbox'>
                <input type="checkbox" className='product-input' value='on'></input>
                <span className='custom-checkbox-indicator'></span>
                <img src={orderDetails.avatar} width="100" height="100"></img>
              </label>
              <a href='#' className='product-desc'>
                <span className='product-arrow arrow'>
                  {rightArrow}
                </span>
                <div className='product-info'>
                  <h3 className='product-title text'>
                    {orderDetails.title}
                  </h3>
                  <p className='text-help text'>
                    {orderDetails.description}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}