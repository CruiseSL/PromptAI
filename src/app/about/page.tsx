import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About PromptAI</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to PromptAI, your advanced assistant for crafting the perfect AI prompts.
          </p>
          <p className="text-gray-600">
            Our mission is to help you unlock the full potential of large language models by providing tools and resources to refine your prompt engineering skills.
          </p>
        </div>
      </div>
    </div>
  );
}
