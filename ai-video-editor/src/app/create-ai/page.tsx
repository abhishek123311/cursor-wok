'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeft, Sparkles, Image, Mic, Wand2, Play } from 'lucide-react';

type Step = 'script' | 'visuals' | 'voiceover';

export default function CreateAIPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('script');
  const [scriptPrompt, setScriptPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedScript, setGeneratedScript] = useState('');

  const steps = [
    { id: 'script', name: 'Generate Script', icon: Wand2, color: 'from-primary to-orange-600' },
    { id: 'visuals', name: 'Generate Visuals', icon: Image, color: 'from-secondary to-purple-600' },
    { id: 'voiceover', name: 'Generate Voiceover', icon: Mic, color: 'from-action to-green-600' }
  ];

  const handleGenerateScript = async () => {
    if (!scriptPrompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedScript(`
🎬 **INTRO (0-5 seconds)**
Quick hook: &quot;Did you know this simple trick can change your life?&quot;

🎯 **MAIN CONTENT (5-25 seconds)**
- Show the problem/challenge
- Demonstrate the solution step by step
- Use dynamic transitions and close-ups

✨ **CALL TO ACTION (25-30 seconds)**
&quot;Try this now and let me know in the comments!&quot;
- Add trending music overlay
- Include captions for accessibility

**VISUAL STYLE:** Cinematic, warm tones, quick cuts
**MUSIC:** Upbeat, trending sound
**HASHTAGS:** #LifeHacks #Viral #MustTry
      `);
      setIsGenerating(false);
    }, 3000);
  };

  const handleStepClick = (step: Step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'script':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                What&apos;s your video about?
              </label>
              <textarea
                value={scriptPrompt}
                onChange={(e) => setScriptPrompt(e.target.value)}
                placeholder="E.g., &apos;A cooking tutorial for making quick breakfast&apos;, &apos;Travel tips for budget travelers&apos;, &apos;Tech review of latest smartphone&apos;..."
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none resize-none text-gray-700 placeholder-gray-400"
              />
            </div>
            
            <motion.button
              onClick={handleGenerateScript}
              disabled={!scriptPrompt.trim() || isGenerating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-orange-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 animate-pulse-glow"
            >
              {isGenerating ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Generating Magic...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  <span>Generate Script</span>
                </>
              )}
            </motion.button>

            {generatedScript && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Generated Script</span>
                </h3>
                <div className="prose prose-gray max-w-none">
                  <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                    {generatedScript}
                  </pre>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Use This Script
                  </button>
                  <button 
                    onClick={handleGenerateScript}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Regenerate
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      case 'visuals':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50">
                             <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visual Generation</h3>
              <p className="text-gray-600 mb-6">
                AI-powered visual generation will create stunning visuals based on your script.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-secondary to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
              >
                Generate Visuals
              </motion.button>
            </div>
          </motion.div>
        );

      case 'voiceover':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50">
              <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Voiceover Generation</h3>
              <p className="text-gray-600 mb-6">
                Choose from multiple AI voices to narrate your script with perfect timing.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-action to-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
              >
                Generate Voiceover
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange-50">
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => router.push('/dashboard')}
                whileHover={{ x: -2 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">VidCraft AI</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Create with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Magic</span>
          </h1>
          <p className="text-gray-600 text-lg">Let AI help you create viral content step by step</p>
        </motion.div>

        {/* Step Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-1 bg-white/70 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
                       {steps.map((step) => {
             const IconComponent = step.icon;
             const isActive = currentStep === step.id;
             
             return (
               <motion.button
                 key={step.id}
                  onClick={() => handleStepClick(step.id as Step)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActive 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{step.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl"
        >
          {renderStepContent()}
        </motion.div>
      </main>
    </div>
  );
}