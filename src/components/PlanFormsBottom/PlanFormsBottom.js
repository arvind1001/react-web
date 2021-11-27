import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './PlanFormsBottom.scss';

const PlanFormsBottom = () => {
  return (
    <>
     <Row>
          <Col sm={12} md={6} className="mx-auto">
            <div className="ex-plans">
              <p>Create a new Meal Plan</p>
              <div class="form-group">
                <label>Exercise Plan Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Plan Name"
                />
              </div>
              <div class="form-group">
                <label>Select Week</label>
                <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className="submit-btn">
                  <button className="btn">Create Plan</button>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col sm={12} md={6}>
            <div className="ex-plans">
              <p>or Select an existing Exercise plan</p>
              <div class="form-group">
                <label>Exercise plan Name</label>
                <select class="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className='submit-btn'>
                  <button className="btn">Submit</button>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
    </>
  );
}

export default PlanFormsBottom;