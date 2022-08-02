import React from 'react'
import { Accordion } from 'react-bootstrap'
import { logo } from '../assets'
import './style.css'

export default function Sidebar() {
  return (
    <div className='bg-white w-100 h-100vh'>
      <center>
        <img src={logo} className="w-50" />
      </center>
      <div className='m-2'>
        <a className='text-decoration-none text-black text-center' href="/main/dashboard"><h5>Dashboard</h5></a>
      </div>
      <div>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Product</Accordion.Header>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Product Data</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Product Report</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Product Stock</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Merchant</Accordion.Header>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Merchant Data</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Merchant Report</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Product Stock</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Transaction</Accordion.Header>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Transaction Data</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Transaction Report</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Customer</Accordion.Header>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Customer Data</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Customer Report</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Employee</Accordion.Header>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Employee Data</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Employee Division</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Employee Report</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Warehouse</Accordion.Header>
            <Accordion.Body>
              <a href='#report' className='text-decoration-none text-black'>Warehouse Report</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Warehouse Data</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Settings</Accordion.Header>
            <Accordion.Body>
              <a href='/main/settings/profile' className='text-decoration-none text-black'>Profile</a>
            </Accordion.Body>
            <Accordion.Body>
              <a href='#data' className='text-decoration-none text-black'>Security</a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}
