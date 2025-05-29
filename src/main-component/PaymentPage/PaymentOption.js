 import React, { useState } from 'react';
import { CreditCard, Smartphone, Building2, FileText, QrCode, Copy, Check } from 'lucide-react';

export default function PaymentOptionsPage() {
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const paymentGateways = [
    { name: 'PayPal', color: 'btn-primary', icon: '💳' },
    { name: 'Stripe', color: 'btn-secondary', icon: '💎' },
    { name: 'Razorpay', color: 'btn-info', icon: '⚡' },
    { name: 'PhonePe', color: 'btn-dark', icon: '📱' },
    { name: 'Google Pay', color: 'btn-success', icon: '🔵' },
    { name: 'Paytm', color: 'btn-warning', icon: '💰' }
  ];

  const upiId = 'merchant@paytm';
  const qrCodeData = `upi://pay?pa=${upiId}&pn=MerchantName&cu=INR`;

  return (
    <>
      {/* Bootstrap CSS */}
      {/* <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      /> */}
      
      <style>{`
         
        
        .payment-card {
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          border: none;
        }
        
        .method-btn {
          border-radius: 10px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .method-btn:hover {
          transform: translateY(-2px);
        }
        
        .method-btn.active {
          border-color: #0d6efd !important;
          background-color: #e7f3ff;
        }
        
        .copy-btn {
          border: none;
          background: none;
          color: #0d6efd;
          padding: 8px;
          border-radius: 5px;
          transition: all 0.2s;
        }
        
        .copy-btn:hover {
          background-color: #e7f3ff;
        }
        
        .qr-placeholder {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
          border: 2px dashed #ccc;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .gateway-btn {
          transition: all 0.3s ease;
          border-radius: 10px;
          height: 120px;
        }
        
        .gateway-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .payment-method-icon {
          width: 24px;
          height: 24px;
        }
        
        .security-notice {
          background-color: #d1e7dd;
          border-color: #badbcc;
          border-radius: 10px;
        }
      `}</style>

      <div className="container-fluid py-5">
        <div className="container">
          {/* Header */}
          <div class="sec-title centered">
            <div className="title">Payment Options</div>
                    <h2>Choose your preferred payment method</h2>
                   
          </div>

          <div className="row g-4">
            {/* Payment Method Selection */}
            <div className="col-lg-4">
              <div className="card payment-card h-100">
                <div className="card-body p-4">
                  <h2 className="h4 fw-semibold mb-4 text-dark">Select Method</h2>
                  <div className="d-grid gap-3">
                    <div
                      className={`card method-btn p-3 ${selectedMethod === 'upi' ? 'active' : ''}`}
                      onClick={() => setSelectedMethod('upi')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <Smartphone className="payment-method-icon me-3 text-primary" />
                        <span className="fw-medium">UPI Payment</span>
                      </div>
                    </div>
                    
                    <div
                      className={`card method-btn p-3 ${selectedMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => setSelectedMethod('bank')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <Building2 className="payment-method-icon me-3 text-success" />
                        <span className="fw-medium">Bank Transfer</span>
                      </div>
                    </div>
                    
                    <div
                      className={`card method-btn p-3 ${selectedMethod === 'check' ? 'active' : ''}`}
                      onClick={() => setSelectedMethod('check')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <FileText className="payment-method-icon me-3 text-warning" />
                        <span className="fw-medium">Check Payment</span>
                      </div>
                    </div>
                    
                    <div
                      className={`card method-btn p-3 ${selectedMethod === 'gateway' ? 'active' : ''}`}
                      onClick={() => setSelectedMethod('gateway')}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <CreditCard className="payment-method-icon me-3 text-danger" />
                        <span className="fw-medium">Payment Gateway</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="col-lg-8">
              <div className="card payment-card h-100">
                <div className="card-body p-4">
                  {selectedMethod === 'upi' && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <Smartphone className="me-2 text-primary" style={{ width: '28px', height: '28px' }} />
                        <h2 className="h3 fw-semibold text-dark mb-0">UPI Payment</h2>
                      </div>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <h3 className="h5 fw-medium mb-4 text-dark">UPI Details</h3>
                          <div className="mb-4">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">UPI ID</label>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="font-monospace h5 mb-0">{upiId}</span>
                                <button
                                  className="copy-btn"
                                  onClick={() => copyToClipboard(upiId, 'upi')}
                                  title="Copy UPI ID"
                                >
                                  {copiedField === 'upi' ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="card bg-light p-3">
                            <label className="form-label small fw-medium text-muted mb-2">Merchant Name</label>
                            <span className="h5 mb-0">vyaparkranti Pvt Ltd</span>
                          </div>
                        </div>
                        
                        <div className="col-md-6 text-center">
                          <h3 className="h5 fw-medium mb-4 text-dark">Scan QR Code</h3>
                          <div className="qr-placeholder mx-auto">
                            <div className="text-center">
                              <QrCode size={48} className="text-muted mb-2" />
                              <p className="small text-muted mb-1">QR Code</p>
                              <p className="small text-muted">Scan with any UPI app</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'bank' && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <Building2 className="me-2 text-success" style={{ width: '28px', height: '28px' }} />
                        <h2 className="h3 fw-semibold text-dark mb-0">Bank Transfer Details</h2>
                      </div>
                      
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">Account Name</label>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="h6 mb-0">vyaparkranti Pvt Ltd</span>
                                <button
                                  className="copy-btn"
                                  onClick={() => copyToClipboard('VyaparKranti Pvt Ltd', 'account')}
                                  title="Copy Account Name"
                                >
                                  {copiedField === 'account' ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">Account Number</label>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="font-monospace h6 mb-0">1234567890123456</span>
                                <button
                                  className="copy-btn"
                                  onClick={() => copyToClipboard('1234567890123456', 'accnum')}
                                  title="Copy Account Number"
                                >
                                  {copiedField === 'accnum' ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">IFSC Code</label>
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="font-monospace h6 mb-0">HDFC0001234</span>
                                <button
                                  className="copy-btn"
                                  onClick={() => copyToClipboard('HDFC0001234', 'ifsc')}
                                  title="Copy IFSC Code"
                                >
                                  {copiedField === 'ifsc' ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="mb-3">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">Bank Name</label>
                              <span className="h6 mb-0">HDFC Bank</span>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="card bg-light p-3">
                              <label className="form-label small fw-medium text-muted mb-2">Branch</label>
                              <span className="h6 mb-0">Connaught Place, New Delhi</span>
                            </div>
                          </div>
                          
                          <div className="alert alert-warning">
                            <strong>Note:</strong> Please add your order reference number in the transfer description
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'check' && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <FileText className="me-2 text-warning" style={{ width: '28px', height: '28px' }} />
                        <h2 className="h3 fw-semibold text-dark mb-0">Check Payment</h2>
                      </div>
                      
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="card border-warning bg-warning bg-opacity-10 p-4 mb-4">
                            <h3 className="h5 fw-medium mb-3 text-warning-emphasis">Payable To</h3>
                            <p className="h4 fw-semibold text-warning-emphasis mb-0">vyaparkranti Pvt Ltd</p>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="card bg-light p-4">
                            <h3 className="h5 fw-medium mb-3 text-dark">Mailing Address</h3>
                            <div className="text-dark">
                              <p className="mb-1">Vyaparkranti Pvt Ltd</p>
                              <p className="mb-1">123 Business District</p>
                              <p className="mb-1">Connaught Place</p>
                              <p className="mb-1">New Delhi - 110001</p>
                              <p className="mb-0">India</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="alert alert-info">
                            <h4 className="alert-heading h6 fw-medium">Important Instructions:</h4>
                            <ul className="small mb-0">
                              <li>Write your order reference number on the check memo</li>
                              <li>Check should be drawn in favor of "Vyaparkranti Pvt Ltd"</li>
                              <li>Processing time: 3-5 business days after receipt</li>
                              <li>Checks must be in INR currency</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'gateway' && (
                    <div>
                      <div className="d-flex align-items-center mb-4">
                        <CreditCard className="me-2 text-danger" style={{ width: '28px', height: '28px' }} />
                        <h2 className="h3 fw-semibold text-dark mb-0">Payment Gateways</h2>
                      </div>
                      
                      <div className="row g-3 mb-4">
                        {paymentGateways.map((gateway, index) => (
                          <div key={index} className="col-sm-6 col-lg-4">
                            <button
                              className={`btn ${gateway.color} w-100 gateway-btn d-flex flex-column align-items-center justify-content-center`}
                              onClick={() => alert(`Redirecting to ${gateway.name}...`)}
                            >
                              <div className="fs-1 mb-2">{gateway.icon}</div>
                              <div className="fw-semibold">{gateway.name}</div>
                              <div className="small opacity-75">Pay with {gateway.name}</div>
                            </button>
                          </div>
                        ))}
                      </div>
                      
                      <div className="card bg-light p-4">
                        <h4 className="h6 fw-medium text-dark mb-3">Accepted Payment Methods:</h4>
                        <div className="d-flex flex-wrap gap-2">
                          <span className="badge bg-white text-dark border px-3 py-2">Credit Cards</span>
                          <span className="badge bg-white text-dark border px-3 py-2">Debit Cards</span>
                          <span className="badge bg-white text-dark border px-3 py-2">Net Banking</span>
                          <span className="badge bg-white text-dark border px-3 py-2">Digital Wallets</span>
                          <span className="badge bg-white text-dark border px-3 py-2">UPI</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-5">
            <div className="alert security-notice d-flex align-items-center">
              <div className="me-3 fs-4">🔒</div>
              <div>
                <h4 className="alert-heading h6 fw-medium text-success-emphasis mb-1">Secure Payment</h4>
                <p className="small text-success-emphasis mb-0">All payment methods are secured with bank-level encryption. Your financial information is safe with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script> */}
    </>
  );
}