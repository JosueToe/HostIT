// Stripe integration for HostIT website subscriptions
// This is a client-side implementation for Vite/React

export interface StripeConfig {
  publishableKey: string;
  priceIds: Record<string, string>;
}

// In a real implementation, these would come from environment variables
const stripeConfig: StripeConfig = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder',
  priceIds: {
    'bella-restaurant': 'price_1234567890',
    'tg-telecomm': 'price_2345678901', 
    'sololaunch': 'price_3456789012',
    'artisan-coffee': 'price_4567890123',
    'green-gardens': 'price_5678901234',
    'urban-dental': 'price_6789012345'
  }
};

export const createCheckoutSession = async (siteId: string, siteName: string, price: number) => {
  try {
    // In a real implementation, this would call your backend API
    // For now, we'll simulate the Stripe Checkout redirect
    
    console.log(`Creating checkout session for ${siteName} at $${price}/month`);
    
    // This would be your actual Stripe Checkout URL in production
    const checkoutUrl = `https://checkout.stripe.com/pay/cs_test_${siteId}#fidkdWxOYHwnPyd1blpxYHZxWjA0SnJqSVFxaGhLSW9xNXJBUjBiXUJGUHNfSzFAVlVfUEBxQ3ZnZXZGMHNqc0JCNkNGXzNyPUxvPWNtTGZnZEFmQ3M8VUxjTTJHVUdDZklnZjRtfGNGNWRhNGNiTVNqTicpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl`;
    
    // In production, you would redirect to the actual Stripe Checkout
    window.open(checkoutUrl, '_blank');
    
    return { success: true, url: checkoutUrl };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return { success: false, error: 'Failed to create checkout session' };
  }
};

export const getSitePriceId = (siteId: string): string => {
  const siteIdMap: Record<number, string> = {
    1: 'bella-restaurant',
    2: 'tg-telecomm', 
    3: 'sololaunch',
    4: 'artisan-coffee',
    5: 'green-gardens',
    6: 'urban-dental'
  };
  
  const key = siteIdMap[parseInt(siteId)] || 'bella-restaurant';
  return stripeConfig.priceIds[key] || stripeConfig.priceIds['bella-restaurant'];
};

export default stripeConfig;
