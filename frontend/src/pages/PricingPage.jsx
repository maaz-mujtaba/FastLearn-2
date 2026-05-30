import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const PricingPage = () => {
  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-text-secondary mb-12">Start free, upgrade when you're ready</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-2">Free Plan</h2>
            <div className="text-4xl font-bold text-accent-purple mb-4">$0</div>
            <p className="text-text-secondary mb-6">Perfect for beginners</p>
            <ul className="space-y-3 mb-8 text-left">
              <li>✓ 60% of all courses</li>
              <li>✓ Hands-on coding exercises</li>
              <li>✓ XP points & streaks</li>
              <li>✓ Community support</li>
              <li>✗ Ad-supported experience</li>
              <li>✗ No certificates</li>
            </ul>
            <Button variant="primary" fullWidth>Get Started Free</Button>
          </Card>

          <Card className="p-8 border-2 border-accent-purple relative">
            <Badge variant="premium" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              Most Popular
            </Badge>
            <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
            <div className="text-4xl font-bold text-accent-purple mb-2">₹299<span className="text-lg">/month</span></div>
            <p className="text-text-secondary mb-6">or ₹1999/year (save 44%)</p>
            <ul className="space-y-3 mb-8 text-left">
              <li>✓ 100% all courses</li>
              <li>✓ Ad-free experience</li>
              <li>✓ Downloadable certificates</li>
              <li>✓ Priority support</li>
              <li>✓ Advanced projects</li>
              <li>✓ Career resources</li>
            </ul>
            <Button variant="primary" fullWidth>Upgrade to Premium</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;