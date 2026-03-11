import { Link } from 'react-router';
import { Heart, User, Compass, Sparkles, MessageCircle, Settings, TrendingUp, Users, Eye, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const stats = [
    { label: 'Profile Views', value: '234', icon: Eye, color: 'bg-blue-500' },
    { label: 'Matches', value: '12', icon: Heart, color: 'bg-primary' },
    { label: 'Messages', value: '8', icon: MessageCircle, color: 'bg-green-500' },
    { label: 'AI Suggestions', value: '5', icon: Sparkles, color: 'bg-purple-500' },
  ];

  const recentMatches = [
    { name: 'Sarah Ahmed', age: 26, profession: 'Doctor', compatibility: 92, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
    { name: 'Fatima Khan', age: 24, profession: 'Engineer', compatibility: 88, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200' },
    { name: 'Aisha Malik', age: 27, profession: 'Teacher', compatibility: 85, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200' },
  ];

  const aiSuggestions = [
    { name: 'Complete Personality Test', description: 'Get better matches with AI insights', icon: Sparkles },
    { name: 'Add More Photos', description: 'Profiles with photos get 3x more views', icon: Eye },
    { name: 'Connect Social Media', description: 'Enable AI social analysis for better compatibility', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-bold text-primary">Rishta AI</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="text-primary flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Dashboard
              </Link>
              <Link to="/explore" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Explore
              </Link>
              <Link to="/ai-matches" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                AI Matches
              </Link>
              <Link to="/chat" className="text-gray-600 hover:text-primary flex items-center gap-2 relative">
                <MessageCircle className="w-5 h-5" />
                Chat
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <Link to="/settings" className="p-2 hover:bg-gray-100 rounded-full">
                <Settings className="w-6 h-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your matches today</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Matches */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Matches</h2>
                <Link to="/ai-matches" className="text-primary hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <motion.div
                    key={match.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{match.name}, {match.age}</h3>
                      <p className="text-gray-600">{match.profession}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{match.compatibility}%</div>
                      <p className="text-xs text-gray-500">Match</p>
                    </div>
                    <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                      View
                    </button>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/explore"
                className="block mt-6 w-full py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors text-center"
              >
                Discover More Matches
              </Link>
            </div>
          </div>

          {/* AI Suggestions */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">AI Suggestions</h2>

              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-r from-primary/5 to-pink-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <suggestion.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{suggestion.name}</h3>
                        <p className="text-sm text-gray-600">{suggestion.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Profile Completion */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Profile Completion</span>
                  <span className="text-primary font-bold">75%</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-gradient-to-r from-primary to-pink-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Complete your profile to get better matches!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="flex justify-around py-3">
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-primary">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link to="/explore" className="flex flex-col items-center gap-1 text-gray-600">
            <Compass className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link to="/ai-matches" className="flex flex-col items-center gap-1 text-gray-600">
            <Sparkles className="w-6 h-6" />
            <span className="text-xs">Matches</span>
          </Link>
          <Link to="/chat" className="flex flex-col items-center gap-1 text-gray-600 relative">
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">Chat</span>
            <span className="absolute -top-1 right-2 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center gap-1 text-gray-600">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
