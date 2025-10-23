import React from "react";

// Step 1: Define prop types using an interface
interface GreetingProps {
  name: string; // the name to display
}

// Step 2: Use TypeScript with a functional component
// The React.FC type automatically adds 'children' prop and typing support
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className="text-2xl font-semibold text-blue-600 text-center mt-4">
      Hello, {name}!
    </div>
  );
};

export default Greeting;
