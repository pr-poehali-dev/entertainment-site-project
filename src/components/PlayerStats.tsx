import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const PlayerStats = () => {
  const playerProfile = {
    name: 'ProGamer2024',
    level: 45,
    rank: 'Мастер',
    avatar: '🎮',
    totalWinnings: 125680,
    gamesPlayed: 1543,
    winRate: 67.5,
    currentStreak: 12,
  };

  const stats = [
    { label: 'Сыграно партий', value: '1,543', icon: 'Gamepad2', color: 'from-blue-500 to-cyan-500' },
    { label: 'Побед', value: '1,042', icon: 'Trophy', color: 'from-amber-500 to-yellow-500' },
    { label: 'Win Rate', value: '67.5%', icon: 'TrendingUp', color: 'from-green-500 to-emerald-500' },
    { label: 'Всего выиграно', value: '$125,680', icon: 'DollarSign', color: 'from-purple-500 to-pink-500' },
  ];

  const pokerStats = [
    { label: 'Турниров сыграно', value: 156, change: '+12' },
    { label: 'Турниров выиграно', value: 23, change: '+3' },
    { label: 'ITM (In The Money)', value: '64%', change: '+5%' },
    { label: 'Средний стек', value: '$12,450', change: '+$1,200' },
    { label: 'Лучший результат', value: '1-е место', change: 'Sunday Million' },
    { label: 'ROI (Return on Investment)', value: '+145%', change: '+12%' },
  ];

  const recentGames = [
    { id: 1, game: 'Sunday Million', result: '12-е место', prize: '$4,500', date: '2 часа назад', won: true },
    { id: 2, game: 'Turbo Knockout', result: '1-е место', prize: '$8,200', date: '5 часов назад', won: true },
    { id: 3, game: 'High Roller', result: '45-е место', prize: '$0', date: '1 день назад', won: false },
    { id: 4, game: 'Daily Freeroll', result: '3-е место', prize: '$750', date: '1 день назад', won: true },
    { id: 5, game: 'Sit & Go', result: '2-е место', prize: '$2,100', date: '2 дня назад', won: true },
  ];

  const levelProgress = ((playerProfile.level % 10) / 10) * 100;

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 overflow-hidden">
        <CardHeader className="relative">
          <div className="absolute top-0 right-0 text-9xl opacity-5">{playerProfile.avatar}</div>
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="text-7xl bg-gradient-to-br from-primary to-secondary rounded-full w-24 h-24 flex items-center justify-center border-4 border-primary shadow-xl">
                {playerProfile.avatar}
              </div>
              <div>
                <CardTitle className="text-4xl mb-2">{playerProfile.name}</CardTitle>
                <div className="flex gap-2 items-center flex-wrap">
                  <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-base px-3 py-1">
                    <Icon name="Award" className="mr-1" size={16} />
                    {playerProfile.rank}
                  </Badge>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    Уровень {playerProfile.level}
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base px-3 py-1">
                    <Icon name="Flame" className="mr-1" size={16} />
                    Серия {playerProfile.currentStreak}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">Общий выигрыш</div>
              <div className="text-4xl font-bold text-primary flex items-center gap-2">
                <Icon name="TrendingUp" size={32} />
                ${playerProfile.totalWinnings.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">До следующего уровня</span>
              <span className="font-semibold">{levelProgress.toFixed(0)}%</span>
            </div>
            <Progress value={levelProgress} className="h-3" />
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="group hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            ></div>
            <CardHeader className="pb-3 relative">
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon name={stat.icon as any} className="text-white" size={24} />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
              <CardDescription className="text-sm">{stat.label}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="BarChart3" size={28} />
              Покерная статистика
            </CardTitle>
            <CardDescription>Детальная информация о ваших турнирах</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pokerStats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors"
              >
                <div>
                  <div className="font-semibold text-base mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                </div>
                <Badge className="bg-green-600 text-white">
                  <Icon name="ArrowUp" size={14} className="mr-1" />
                  {stat.change}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Clock" size={28} />
              Последние игры
            </CardTitle>
            <CardDescription>История ваших недавних партий</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentGames.map((game, index) => (
              <Card
                key={game.id}
                className={`${
                  game.won
                    ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30'
                    : 'bg-gradient-to-r from-gray-500/10 to-gray-600/10 border-gray-500/30'
                } hover:scale-102 transition-transform`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          game.won ? 'bg-green-500' : 'bg-gray-500'
                        }`}
                      ></div>
                      <span className="font-bold">{game.game}</span>
                    </div>
                    <Badge variant={game.won ? 'default' : 'secondary'}>
                      {game.result}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{game.date}</span>
                    <span
                      className={`font-bold ${
                        game.won ? 'text-green-500' : 'text-gray-500'
                      }`}
                    >
                      {game.won ? `+${game.prize}` : game.prize}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 border-2 border-amber-600/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Target" size={28} />
            Достижения за последний месяц
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-card rounded-lg text-center border-2 border-green-500/50">
            <div className="text-5xl mb-3">🏆</div>
            <div className="text-3xl font-bold text-green-500 mb-1">23</div>
            <div className="text-sm text-muted-foreground">Выиграно турниров</div>
          </div>
          <div className="p-6 bg-card rounded-lg text-center border-2 border-purple-500/50">
            <div className="text-5xl mb-3">💰</div>
            <div className="text-3xl font-bold text-purple-500 mb-1">$45,200</div>
            <div className="text-sm text-muted-foreground">Чистая прибыль</div>
          </div>
          <div className="p-6 bg-card rounded-lg text-center border-2 border-amber-500/50">
            <div className="text-5xl mb-3">⭐</div>
            <div className="text-3xl font-bold text-amber-500 mb-1">+12</div>
            <div className="text-sm text-muted-foreground">Рост уровня</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlayerStats;
