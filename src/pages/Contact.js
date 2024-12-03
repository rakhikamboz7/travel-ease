import React, { useState } from "react";
import { Form, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "../Styles/Contact.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleIssueChange = (issue) => setSelectedIssue(issue);
  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Header />

      <div className="contact-us-container">
        {/* Header Section */}
        <div className="image-overlay">
          <div className="text-overlay">
            <h1>Drop Us a Line</h1>
            <div className="contact-details">
              <p>Email us at: <a href="mailto:contact@travelease.com">contact@travelease.com</a></p>
              <Button variant="primary">Call Us</Button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="form-section">
          <h2>We are here to help you</h2>
          <Form>
            {/* Dropdown for selecting an issue */}
            <Form.Group controlId="selectIssue">
              <Form.Label>Select Issue</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                title={selectedIssue || "Select Issue"}
                onSelect={handleIssueChange}
              >
                <Dropdown.Item eventKey="Booking Issue">Booking Issue</Dropdown.Item>
                <Dropdown.Item eventKey="Cancellation">Cancellation</Dropdown.Item>
                <Dropdown.Item eventKey="Payment Issue">Payment Issue</Dropdown.Item>
                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            {/* More Details Input */}
            <Form.Group controlId="moreDetails">
              <Form.Label>More Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your issue"
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </div>

        {/* Chat Input Section */}
        <div className="chat-input-section">
          <Form.Group controlId="chatMessage">
            <Form.Label>Type your message</Form.Label>
            <div className="chat-input">
              <Form.Control
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button variant="light" className="image-upload-button">
                <i className="fas fa-image"></i> {/* FontAwesome icon */}
              </Button>
            </div>
          </Form.Group>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;


