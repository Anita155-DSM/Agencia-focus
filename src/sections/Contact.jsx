import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xnjdgqbj");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-5"
                style={{ 
                  background: 'rgba(0, 242, 255, 0.05)', 
                  border: '1px solid var(--accent-color)', 
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="display-1 mb-3"></div>
                <h3 className="text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>TRANSMISSION RECEIVED</h3>
                <p className="text-secondary">
                  Over and out. We will review your message and respond shortly via HQ channel.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn btn-outline-light mt-3 btn-sm"
                >
                  SEND ANOTHER
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        
        <div className="row justify-content-center align-items-center g-5">
          
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-cyan mb-2" style={{ letterSpacing: '3px' }}>HQ COMM-LINK</h6>
              <h2 className="text-white display-5 fw-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                GET IN <br /> <span className="text-gradient">TOUCH</span>
              </h2>
              
              <p className="text-secondary lead mb-4" style={{ fontSize: '1rem' }}>
                Have a question about a setup? Spotted a broken link? Or just want to talk gear? 
                We are an independent review lab here to help you build the ultimate station.
              </p>

              <div className="p-3 mb-4" style={{ background: 'rgba(255, 68, 68, 0.1)', borderLeft: '4px solid #ff4444', borderRadius: '4px' }}>
                <p className="text-light small m-0">
                  <strong>Note:</strong> We do not handle shipping, returns, or tracking. 
                  All orders are processed securely through <strong>Amazon</strong>. Please contact Amazon Support for order issues.
                </p>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center">
                  <div className="badge bg-dark border border-secondary p-2 me-3"></div>
                  <span className="text-light small">Setup Advice & Questions</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="badge bg-dark border border-secondary p-2 me-3"></div>
                  <span className="text-light small">Report Broken Links</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="badge bg-dark border border-secondary p-2 me-3"></div>
                  <span className="text-light small">Business & Sponsorships</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-5 position-relative overflow-hidden"
              style={{ 
                background: 'rgba(13, 17, 23, 0.6)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 0 40px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--accent-color)' }}></div>

              <h4 className="text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>SEND MESSAGE</h4>

              <div className="mb-4">
                <label htmlFor="name" className="text-secondary small mb-1">NAME / GAMER TAG</label>
                <input 
                  id="name"
                  type="text" 
                  name="name" 
                  required
                  className="form-control bg-transparent text-white" 
                  style={{ border: 'none', borderBottom: '1px solid #444', borderRadius: 0, paddingLeft: 0 }} 
                  placeholder="Enter your name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-secondary small mb-1">EMAIL ADDRESS</label>
                <input 
                  id="email"
                  type="email" 
                  name="email" 
                  required
                  className="form-control bg-transparent text-white" 
                  style={{ border: 'none', borderBottom: '1px solid #444', borderRadius: 0, paddingLeft: 0 }} 
                  placeholder="email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="text-secondary small mb-1">TOPIC</label>
                <select 
                  id="subject"
                  name="subject" 
                  className="form-select bg-transparent text-white" 
                  style={{ border: 'none', borderBottom: '1px solid #444', borderRadius: 0, paddingLeft: 0 }}
                >
                  <option className="bg-dark text-secondary" value="Question">Gear Question / Advice</option>
                  <option className="bg-dark text-secondary" value="Broken Link">Report Broken Link</option>
                  <option className="bg-dark text-secondary" value="Business">Business / Advertising</option>
                  <option className="bg-dark text-secondary" value="Other">Other</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="text-secondary small mb-1">MESSAGE</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="3"
                  className="form-control bg-transparent text-white" 
                  style={{ border: 'none', borderBottom: '1px solid #444', borderRadius: 0, paddingLeft: 0 }} 
                  placeholder="How can we help?"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={state.submitting}
                className="btn w-100 py-3 fw-bold" 
                style={{ 
                  background: state.submitting ? '#555' : 'var(--accent-color)', 
                  color: state.submitting ? '#fff' : '#000', 
                  fontFamily: 'Orbitron, sans-serif',
                  letterSpacing: '2px',
                  border: 'none',
                  boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                }}
              >
                {state.submitting ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
              </motion.button>

            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;