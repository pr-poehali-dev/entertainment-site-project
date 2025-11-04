import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import GameRoulette from '@/components/GameRoulette';

const Index = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const popularGames = [
    { id: 1, name: 'Valorant', genre: 'FPS', players: '24.5K', image: '🎯', color: 'from-red-500 to-pink-500' },
    { id: 2, name: 'League of Legends', genre: 'MOBA', players: '45.2K', image: '⚔️', color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'CS:GO', genre: 'FPS', players: '38.1K', image: '🔫', color: 'from-orange-500 to-yellow-500' },
    { id: 4, name: 'Dota 2', genre: 'MOBA', players: '32.8K', image: '🛡️', color: 'from-purple-500 to-indigo-500' },
    { id: 5, name: 'Fortnite', genre: 'Battle Royale', players: '51.3K', image: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 6, name: 'Apex Legends', genre: 'Battle Royale', players: '29.7K', image: '💎', color: 'from-violet-500 to-purple-500' },
  ];

  const tournaments = [
    { id: 1, name: 'Cyber Championship 2024', game: 'Valorant', prize: '$500,000', date: '15 ноября', status: 'Регистрация' },
    { id: 2, name: 'League Masters Cup', game: 'LoL', prize: '$1,000,000', date: '22 ноября', status: 'Скоро' },
    { id: 3, name: 'Global CS Tournament', game: 'CS:GO', prize: '$750,000', date: '30 ноября', status: 'Регистрация' },
  ];

  const streams = [
    { id: 1, streamer: 'ProGamer_TV', game: 'Valorant', viewers: '12.5K', platform: 'Twitch', live: true },
    { id: 2, streamer: 'StreamMaster', game: 'League of Legends', viewers: '24.8K', platform: 'YouTube', live: true },
    { id: 3, streamer: 'CyberNinja', game: 'CS:GO', viewers: '8.2K', platform: 'Twitch', live: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-background animate-gradient-shift bg-[length:200%_200%]"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">150K+ игроков онлайн</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary">
                Игровой мир
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              Присоединяйся к крупнейшему игровому сообществу. Играй, соревнуйся, побеждай.
            </p>
            
            <div className="flex gap-4 justify-center items-center flex-wrap">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                <Icon name="Gamepad2" className="mr-2" size={24} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                <Icon name="Trophy" className="mr-2" size={24} />
                Турниры
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <GameRoulette />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="games" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="games" className="text-base">
              <Icon name="Gamepad2" className="mr-2" size={18} />
              Игры
            </TabsTrigger>
            <TabsTrigger value="tournaments" className="text-base">
              <Icon name="Trophy" className="mr-2" size={18} />
              Турниры
            </TabsTrigger>
            <TabsTrigger value="streams" className="text-base">
              <Icon name="Radio" className="mr-2" size={18} />
              Трансляции
            </TabsTrigger>
          </TabsList>

          <TabsContent value="games" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Популярные игры</h2>
              <p className="text-muted-foreground">Выбери свою игру и начни доминировать</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularGames.map((game, index) => (
                <Card 
                  key={game.id}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary overflow-hidden ${
                    activeGame === game.name ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setActiveGame(game.name)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {game.image}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {game.genre}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {game.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base">
                      <Icon name="Users" size={16} />
                      <span className="font-semibold">{game.players}</span> онлайн
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Icon name="Play" className="mr-2" size={18} />
                      Играть сейчас
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tournaments" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Активные турниры</h2>
              <p className="text-muted-foreground">Соревнуйся с лучшими за крупные призы</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {tournaments.map((tournament, index) => (
                <Card 
                  key={tournament.id}
                  className="group hover:shadow-xl hover:shadow-primary/20 border-2 hover:border-primary transition-all duration-300 hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {tournament.name}
                      </CardTitle>
                      <Badge className={`${
                        tournament.status === 'Регистрация' 
                          ? 'bg-green-500 hover:bg-green-600 pulse-glow' 
                          : 'bg-orange-500 hover:bg-orange-600'
                      }`}>
                        {tournament.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {tournament.game}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" className="text-primary" size={24} />
                        <div>
                          <p className="text-xs text-muted-foreground">Призовой фонд</p>
                          <p className="text-2xl font-bold text-primary">{tournament.prize}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" className="text-primary" size={24} />
                        <div>
                          <p className="text-xs text-muted-foreground">Дата</p>
                          <p className="text-lg font-semibold">{tournament.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="lg">
                      {tournament.status === 'Регистрация' ? (
                        <>
                          <Icon name="UserPlus" className="mr-2" size={20} />
                          Зарегистрироваться
                        </>
                      ) : (
                        <>
                          <Icon name="Bell" className="mr-2" size={20} />
                          Напомнить
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="streams" className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Прямые трансляции</h2>
              <p className="text-muted-foreground">Смотри лучших игроков в реальном времени</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {streams.map((stream, index) => (
                <Card 
                  key={stream.id}
                  className="group hover:shadow-xl hover:shadow-primary/20 border-2 hover:border-primary transition-all duration-300 hover-scale overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 h-48 flex items-center justify-center">
                    <div className="text-6xl">🎮</div>
                    {stream.live && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 hover:bg-red-600 pulse-glow">
                          <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          LIVE
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Icon name="Eye" size={16} />
                      <span className="font-semibold text-sm">{stream.viewers}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {stream.streamer}
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>{stream.game}</span>
                      <Badge variant="outline">{stream.platform}</Badge>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button className="w-full" variant="secondary">
                      <Icon name="Play" className="mr-2" size={18} />
                      Смотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Icon name="Video" size={28} />
                    Интеграция с популярными платформами
                  </CardTitle>
                  <CardDescription className="text-base">
                    Подключайте свои аккаунты Twitch, YouTube и других стриминговых сервисов
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-4 flex-wrap">
                  <Badge variant="secondary" className="text-lg px-4 py-2">Twitch</Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">YouTube Gaming</Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Kick</Badge>
                  <Badge variant="secondary" className="text-lg px-4 py-2">Trovo</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Игровой портал</h3>
              <p className="text-muted-foreground">
                Твой путь к киберспортивной славе начинается здесь
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-scale">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-muted-foreground">support@gameportal.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Игровой портал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;