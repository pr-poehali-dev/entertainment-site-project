import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: string;
  category: 'games' | 'social' | 'tournaments' | 'special';
}

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Первая победа',
      description: 'Одержи свою первую победу',
      icon: '🏆',
      progress: 1,
      maxProgress: 1,
      unlocked: true,
      rarity: 'common',
      reward: '100 монет',
      category: 'games',
    },
    {
      id: 2,
      title: 'Серийный победитель',
      description: 'Выиграй 10 матчей подряд',
      icon: '🔥',
      progress: 7,
      maxProgress: 10,
      unlocked: false,
      rarity: 'rare',
      reward: '500 монет',
      category: 'games',
    },
    {
      id: 3,
      title: 'Легенда арены',
      description: 'Одержи 100 побед',
      icon: '⚔️',
      progress: 45,
      maxProgress: 100,
      unlocked: false,
      rarity: 'epic',
      reward: 'Эксклюзивный скин',
      category: 'games',
    },
    {
      id: 4,
      title: 'Командный игрок',
      description: 'Пригласи 5 друзей',
      icon: '👥',
      progress: 3,
      maxProgress: 5,
      unlocked: false,
      rarity: 'common',
      reward: '200 монет',
      category: 'social',
    },
    {
      id: 5,
      title: 'Социальная звезда',
      description: 'Набери 1000 подписчиков',
      icon: '⭐',
      progress: 450,
      maxProgress: 1000,
      unlocked: false,
      rarity: 'rare',
      reward: 'VIP бадж',
      category: 'social',
    },
    {
      id: 6,
      title: 'Турнирный боец',
      description: 'Участвуй в 5 турнирах',
      icon: '🎯',
      progress: 2,
      maxProgress: 5,
      unlocked: false,
      rarity: 'rare',
      reward: '300 монет',
      category: 'tournaments',
    },
    {
      id: 7,
      title: 'Чемпион',
      description: 'Победи в турнире',
      icon: '👑',
      progress: 0,
      maxProgress: 1,
      unlocked: false,
      rarity: 'legendary',
      reward: 'Золотая корона',
      category: 'tournaments',
    },
    {
      id: 8,
      title: 'Везунчик',
      description: 'Выиграй джекпот в рулетке',
      icon: '💎',
      progress: 0,
      maxProgress: 1,
      unlocked: false,
      rarity: 'legendary',
      reward: '10,000 монет',
      category: 'special',
    },
    {
      id: 9,
      title: 'Ежедневный игрок',
      description: 'Заходи в игру 30 дней подряд',
      icon: '📅',
      progress: 12,
      maxProgress: 30,
      unlocked: false,
      rarity: 'epic',
      reward: 'Премиум скин',
      category: 'special',
    },
  ];

  const rarityColors = {
    common: 'from-gray-500 to-gray-600',
    rare: 'from-blue-500 to-cyan-500',
    epic: 'from-purple-500 to-pink-500',
    legendary: 'from-amber-500 to-yellow-500',
  };

  const rarityLabels = {
    common: 'Обычное',
    rare: 'Редкое',
    epic: 'Эпическое',
    legendary: 'Легендарное',
  };

  const stats = {
    total: achievements.length,
    unlocked: achievements.filter(a => a.unlocked).length,
    inProgress: achievements.filter(a => !a.unlocked && a.progress > 0).length,
    locked: achievements.filter(a => a.progress === 0).length,
  };

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Icon name="Award" size={40} className="text-primary" />
          Достижения
        </h2>
        <p className="text-muted-foreground text-lg">
          Выполняй задания, получай награды и становись легендой
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold text-primary">{stats.unlocked}</CardTitle>
            <CardDescription>Разблокировано</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="text-center bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold text-secondary">{stats.inProgress}</CardTitle>
            <CardDescription>В процессе</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center bg-gradient-to-br from-muted/30 to-muted/10 border-muted">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold">{stats.locked}</CardTitle>
            <CardDescription>Заблокировано</CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold text-accent">{stats.total}</CardTitle>
            <CardDescription>Всего</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
          <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>
            Все
          </TabsTrigger>
          <TabsTrigger value="games" onClick={() => setSelectedCategory('games')}>
            <Icon name="Gamepad2" className="mr-1" size={16} />
            Игры
          </TabsTrigger>
          <TabsTrigger value="social" onClick={() => setSelectedCategory('social')}>
            <Icon name="Users" className="mr-1" size={16} />
            Социальные
          </TabsTrigger>
          <TabsTrigger value="tournaments" onClick={() => setSelectedCategory('tournaments')}>
            <Icon name="Trophy" className="mr-1" size={16} />
            Турниры
          </TabsTrigger>
          <TabsTrigger value="special" onClick={() => setSelectedCategory('special')}>
            <Icon name="Sparkles" className="mr-1" size={16} />
            Особые
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className={`group relative overflow-hidden transition-all duration-300 ${
                  achievement.unlocked
                    ? 'border-2 border-primary shadow-lg shadow-primary/20 hover:scale-105'
                    : 'opacity-90 hover:opacity-100'
                } hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    rarityColors[achievement.rarity]
                  } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {achievement.unlocked && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-primary rounded-full p-2">
                      <Icon name="Check" className="text-primary-foreground" size={16} />
                    </div>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`text-5xl ${
                        achievement.unlocked ? 'scale-110' : 'grayscale opacity-50'
                      } transition-all duration-300 group-hover:scale-125`}
                    >
                      {achievement.icon}
                    </div>
                    <Badge
                      className={`bg-gradient-to-r ${rarityColors[achievement.rarity]} text-white`}
                    >
                      {rarityLabels[achievement.rarity]}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-semibold">
                        {achievement.progress} / {achievement.maxProgress}
                      </span>
                    </div>
                    <Progress
                      value={(achievement.progress / achievement.maxProgress) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Gift" size={16} />
                      <span>Награда:</span>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      {achievement.reward}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Achievements;
