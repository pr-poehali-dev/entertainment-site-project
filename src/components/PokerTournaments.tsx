import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Tournament {
  id: number;
  name: string;
  buyIn: number;
  prize: number;
  players: number;
  maxPlayers: number;
  startTime: string;
  status: 'Регистрация' | 'Начался' | 'Скоро';
  blinds: string;
  format: string;
}

const PokerTournaments = () => {
  const tournaments: Tournament[] = [
    {
      id: 1,
      name: 'Sunday Million',
      buyIn: 100,
      prize: 1000000,
      players: 8543,
      maxPlayers: 10000,
      startTime: '18:00',
      status: 'Регистрация',
      blinds: '50/100',
      format: 'No Limit Hold\'em',
    },
    {
      id: 2,
      name: 'Turbo Knockout',
      buyIn: 25,
      prize: 150000,
      players: 2341,
      maxPlayers: 5000,
      startTime: '20:00',
      status: 'Регистрация',
      blinds: '100/200',
      format: 'Turbo',
    },
    {
      id: 3,
      name: 'High Roller Championship',
      buyIn: 500,
      prize: 2500000,
      players: 145,
      maxPlayers: 200,
      startTime: '22:00',
      status: 'Скоро',
      blinds: '200/400',
      format: 'No Limit Hold\'em',
    },
    {
      id: 4,
      name: 'Daily Freeroll',
      buyIn: 0,
      prize: 5000,
      players: 4892,
      maxPlayers: 5000,
      startTime: '15:00',
      status: 'Начался',
      blinds: '500/1000',
      format: 'Freeroll',
    },
    {
      id: 5,
      name: 'Sit & Go Battle',
      buyIn: 50,
      prize: 50000,
      players: 156,
      maxPlayers: 1000,
      startTime: '19:00',
      status: 'Регистрация',
      blinds: '25/50',
      format: 'Sit & Go',
    },
    {
      id: 6,
      name: 'Saturday Showdown',
      buyIn: 200,
      prize: 500000,
      players: 1823,
      maxPlayers: 3000,
      startTime: '16:00',
      status: 'Регистрация',
      blinds: '100/200',
      format: 'No Limit Hold\'em',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-3">
          <Icon name="Trophy" size={40} className="text-amber-500" />
          Покерные турниры
        </h2>
        <p className="text-muted-foreground text-lg">
          Участвуй в турнирах и выигрывай крупные призы
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {tournaments.map((tournament, index) => {
          const playersFilled = (tournament.players / tournament.maxPlayers) * 100;
          const isFreeroll = tournament.buyIn === 0;
          const isHighRoller = tournament.buyIn >= 500;

          return (
            <Card
              key={tournament.id}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                tournament.status === 'Начался' 
                  ? 'border-2 border-green-500 shadow-lg shadow-green-500/20' 
                  : 'border-2 hover:border-primary'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                isFreeroll 
                  ? 'from-green-500/10 to-emerald-500/10' 
                  : isHighRoller 
                  ? 'from-amber-500/10 to-yellow-500/10' 
                  : 'from-primary/5 to-secondary/5'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {tournament.status === 'Начался' && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-green-500 hover:bg-green-600 pulse-glow">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    LIVE
                  </Badge>
                </div>
              )}

              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                      {tournament.name}
                    </CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        {tournament.format}
                      </Badge>
                      {isFreeroll && (
                        <Badge className="bg-green-600 text-white text-xs">Freeroll</Badge>
                      )}
                      {isHighRoller && (
                        <Badge className="bg-amber-600 text-white text-xs">High Roller</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <CardDescription className="space-y-2">
                  <div className="flex items-center gap-2 text-base">
                    <Icon name="Clock" size={16} />
                    <span>Старт: {tournament.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-base">
                    <Icon name="Layers" size={16} />
                    <span>Блайнды: {tournament.blinds}</span>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Бай-ин</div>
                    <div className="text-2xl font-bold text-primary flex items-center gap-1">
                      {isFreeroll ? (
                        <>
                          <Icon name="Gift" size={20} />
                          FREE
                        </>
                      ) : (
                        <>
                          <Icon name="DollarSign" size={20} />
                          {tournament.buyIn}
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Призовой фонд</div>
                    <div className="text-2xl font-bold text-amber-500 flex items-center gap-1">
                      <Icon name="Trophy" size={20} />
                      ${(tournament.prize / 1000).toFixed(0)}K
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      Игроки
                    </span>
                    <span className="font-semibold">
                      {tournament.players.toLocaleString()} / {tournament.maxPlayers.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={playersFilled} className="h-2" />
                  <div className="text-xs text-right text-muted-foreground">
                    {playersFilled.toFixed(0)}% заполнено
                  </div>
                </div>

                <Button 
                  className="w-full font-bold" 
                  size="lg"
                  disabled={tournament.status === 'Начался'}
                  variant={tournament.status === 'Начался' ? 'secondary' : 'default'}
                >
                  {tournament.status === 'Начался' ? (
                    <>
                      <Icon name="Eye" className="mr-2" size={20} />
                      Смотреть
                    </>
                  ) : tournament.status === 'Скоро' ? (
                    <>
                      <Icon name="Bell" className="mr-2" size={20} />
                      Напомнить
                    </>
                  ) : (
                    <>
                      <Icon name="Play" className="mr-2" size={20} />
                      Зарегистрироваться
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 border-2 border-amber-600/50">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Info" size={28} />
            Форматы турниров
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold mb-1">Turbo</h3>
            <p className="text-sm text-muted-foreground">Быстрые блайнды, динамичная игра</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-bold mb-1">Freeroll</h3>
            <p className="text-sm text-muted-foreground">Бесплатный вход, реальные призы</p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <div className="text-3xl mb-2">💎</div>
            <h3 className="font-bold mb-1">High Roller</h3>
            <p className="text-sm text-muted-foreground">Большие бай-ины, огромные призы</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PokerTournaments;
