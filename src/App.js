import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Login from './Login';

function App() {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size='6' sm='6'>
              <div
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100vh' }}
            >
              <div className='text-center'>
                <img
                  className='mb-4'
                  src='https://credohire.in/wp-content/uploads/2021/10/Credo_Hire_Logo_PNG_small-size.png'
                  style={{ width: 250 }}
                />
                <h5 className='mb-3'>
                  An analytics driven hiring platform
                </h5>
                
                <MDBBtn
                  tag='a'
                  href='https://mdbootstrap.com/docs/standard/getting-started/'
                  target='_blank'
                  role='button'
                  color='info'
                  size="lg"
                >
                  Book a Demo
                </MDBBtn>
              </div>
            </div>
        </MDBCol>
        <MDBCol size='6' sm='6'>
        <div
              className='d-flex justify-content-center align-items-center'
              style={{ height: '100vh' }}
            >
              <Login></Login>
              </div>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
  );
}

export default App;
