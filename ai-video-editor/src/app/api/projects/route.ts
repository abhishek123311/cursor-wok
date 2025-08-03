import { NextRequest, NextResponse } from 'next/server';

interface Project {
  id: string;
  title: string;
  createdAt: string;
  fileName?: string;
  thumbnail: string;
  duration: string;
  status: 'completed' | 'processing' | 'draft';
}

// Mock database - in a real app, this would be a database
const projects: Project[] = [
  {
    id: '1',
    title: 'Travel Vlog - Goa Adventure',
    createdAt: '2024-01-15T10:30:00Z',
    fileName: 'goa-adventure.mp4',
    thumbnail: 'bg-gradient-to-br from-blue-400 to-blue-600',
    duration: '2:34',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Recipe Tutorial - Butter Chicken',
    createdAt: '2024-01-12T14:20:00Z',
    fileName: 'butter-chicken-recipe.mp4',
    thumbnail: 'bg-gradient-to-br from-orange-400 to-red-500',
    duration: '4:12',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Tech Review - iPhone 15',
    createdAt: '2024-01-10T09:15:00Z',
    fileName: 'iphone-15-review.mp4',
    thumbnail: 'bg-gradient-to-br from-gray-400 to-gray-600',
    duration: '6:45',
    status: 'processing'
  },
  {
    id: '4',
    title: 'Dance Performance - Bollywood Mix',
    createdAt: '2024-01-08T16:45:00Z',
    fileName: 'bollywood-dance.mp4',
    thumbnail: 'bg-gradient-to-br from-pink-400 to-purple-500',
    duration: '3:21',
    status: 'draft'
  }
];

// GET /api/projects - Retrieve all projects
export async function GET(request: NextRequest) {
  try {
    // In a real app, you might want to add pagination, filtering, etc.
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    
    let response = projects;
    
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum)) {
        response = projects.slice(0, limitNum);
      }
    }
    
    // Sort by created date (newest first)
    response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    return NextResponse.json({
      success: true,
      data: response,
      total: projects.length
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch projects' 
      },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, fileName } = body;
    
    // Validation
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Title is required and must be a non-empty string' 
        },
        { status: 400 }
      );
    }
    
    // Create new project
    const newProject: Project = {
      id: Date.now().toString(), // Simple ID generation - in real app, use UUID
      title: title.trim(),
      createdAt: new Date().toISOString(),
      fileName: fileName || undefined,
      thumbnail: getRandomThumbnail(),
      duration: '0:00', // Default duration for new projects
      status: 'draft'
    };
    
    // Add to mock database
    (projects as Project[]).unshift(newProject); // Add to beginning of array
    
    return NextResponse.json({
      success: true,
      data: newProject,
      message: 'Project created successfully'
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create project' 
      },
      { status: 500 }
    );
  }
}

// Helper function to get random thumbnail gradient
function getRandomThumbnail(): string {
  const thumbnails = [
    'bg-gradient-to-br from-blue-400 to-blue-600',
    'bg-gradient-to-br from-orange-400 to-red-500',
    'bg-gradient-to-br from-gray-400 to-gray-600',
    'bg-gradient-to-br from-pink-400 to-purple-500',
    'bg-gradient-to-br from-green-400 to-green-600',
    'bg-gradient-to-br from-purple-400 to-purple-600',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-indigo-400 to-indigo-600',
    'bg-gradient-to-br from-teal-400 to-teal-600',
    'bg-gradient-to-br from-red-400 to-red-600'
  ];
  
  return thumbnails[Math.floor(Math.random() * thumbnails.length)];
}