'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus, Play, Upload, Sparkles, Calendar, Clock, Settings, LogOut } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  createdAt: string;
  thumbnail: string;
  duration: string;
  status: 'completed' | 'processing' | 'draft';
}

export default function DashboardPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userName] = useState('Arjun'); // Mock user name

  // Mock projects data
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Travel Vlog - Goa Adventure',
      createdAt: '2024-01-15',
      thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600',
      duration: '2:34',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Recipe Tutorial - Butter Chicken',
      createdAt: '2024-01-12',
      thumbnail: 'bg-gradient-to-br from-orange-400 to-red-500',
      duration: '4:12',
      status: 'completed'
    },
    {
      id: '3',
      title: 'Tech Review - iPhone 15',
      createdAt: '2024-01-10',
      thumbnail: 'bg-gradient-to-br from-gray-400 to-gray-600',
      duration: '6:45',
      status: 'processing'
    },
    {
      id: '4',
      title: 'Dance Performance - Bollywood Mix',
      createdAt: '2024-01-08',
      thumbnail: 'bg-gradient-to-br from-pink-400 to-purple-500',
      duration: '3:21',
      status: 'draft'
    }
  ]);

  const handleNewProject = (type: 'upload' | 'ai') => {
    setShowModal(false);
    if (type === 'ai') {
      router.push('/create-ai');
    } else {
      // Handle upload logic
      console.log('Upload video clicked');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-action text-white';
      case 'processing': return 'bg-primary text-white';
      case 'draft': return 'bg-gray-400 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-orange-50">
      {/* Header */}
      <header className="border-b border-gray-200/50 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">VidCraft AI</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => router.push('/')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome, {userName}! 👋
          </h1>
          <p className="text-gray-600 text-lg">Ready to create your next viral video?</p>
        </motion.div>

        {/* New Project Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-primary to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-soft-glow flex items-center space-x-3"
          >
            <Plus className="w-6 h-6" />
            <span>+ New Project</span>
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className={`h-40 ${project.thumbnail} flex items-center justify-center relative`}>
                  <Play className="w-12 h-12 text-white/80" />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Project</h2>
              
              <div className="space-y-4">
                <motion.button
                  onClick={() => handleNewProject('upload')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-6 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">Upload Video</h3>
                    <p className="text-gray-600 text-sm">Start with your own footage</p>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => handleNewProject('ai')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-6 border-2 border-primary bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">Create with AI</h3>
                    <p className="text-gray-600 text-sm">Generate everything from scratch</p>
                  </div>
                </motion.button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}