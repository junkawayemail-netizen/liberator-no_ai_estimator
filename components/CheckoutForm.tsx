
import React, { useState, useEffect } from 'react';

interface Plan {
    title: string;
    price: string;
    originalPrice?: string;
    promo?: string;
}

interface CheckoutFormProps {
    plan: Plan;
    onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ plan, onClose }) => {
    const [isPaid, setIsPaid] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPaid(true);
    };
    
    const discount = plan.originalPrice && plan.price 
        ? parseInt(plan.originalPrice.replace(/[^0-9]/g, '')) - parseInt(plan.price.replace(/[^0-9]/g, ''))
        : 0;

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-brand-light rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden transform transition-all duration-300 scale-95 animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label="Close payment modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                {isPaid ? (
                    <div className="p-8 text-center">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-brand-green/20 mx-auto mb-4">
                            <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-2xl font-bold font-heading text-brand-blue mb-2">Payment Successful!</h2>
                        <p className="text-gray-600 mb-6">Thank you for your order. We will contact you shortly to schedule your junk removal.</p>
                        <button
                            onClick={onClose}
                            className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 w-full"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="p-8 border-b border-gray-200">
                            <h2 className="text-2xl font-bold font-heading text-brand-blue mb-1">Complete Your Booking</h2>
                            <p className="text-gray-600">You're booking the <span className="font-semibold text-brand-blue">{plan.title}</span> plan.</p>
                        </div>

                        <div className="p-8 bg-gray-50/50">
                            <h3 className="text-lg font-semibold text-brand-dark mb-3">Order Summary</h3>
                            <div className="space-y-2 text-sm">
                                {plan.originalPrice ? (
                                    <>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Original Price</span>
                                            <span>{plan.originalPrice}</span>
                                        </div>
                                        {discount > 0 && (
                                        <div className="flex justify-between text-brand-green font-semibold">
                                            <span>Discount</span>
                                            <span>-${discount}</span>
                                        </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="flex justify-between text-gray-600">
                                        <span>Price</span>
                                        <span>{plan.price}</span>
                                    </div>
                                )}
                                <div className="pt-2 mt-2 border-t border-gray-200"></div>
                                <div className="flex justify-between font-bold text-brand-blue text-lg">
                                    <span>Total Due</span>
                                    <span>{plan.price}</span>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 pt-4 space-y-4" onSubmit={handlePayment}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="card" className="block text-sm font-medium text-gray-700">Card Information</label>
                                <div className="mt-1 p-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-400 italic text-sm">
                                    Card details form placeholder
                                </div>
                            </div>
                            <div className="bg-yellow-100/60 border-l-4 border-yellow-400 p-3 text-sm text-yellow-800 rounded-r-md">
                                <p><span className="font-bold">For Demonstration Only:</span> Do not enter real credit card information. This is a simulated checkout.</p>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:brightness-95 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                <span>Pay {plan.price} Securely</span>
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default CheckoutForm;
