import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Prize {
  id: number;
  name: string;
  icon: string;
  color: string;
  rarity: string;
}

const GameRoulette = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [spinsLeft, setSpinsLeft] = useState(3);

  const prizes: Prize[] = [
    { id: 0, name: 'Премиум скин', icon: '💎', color: 'from-purple-500 to-pink-500', rarity: 'Легендарный' },
    { id: 1, name: '500 монет', icon: '🪙', color: 'from-yellow-500 to-orange-500', rarity: 'Редкий' },
    { id: 2, name: 'VIP статус', icon: '👑', color: 'from-amber-500 to-yellow-500', rarity: 'Эпический' },
    { id: 3, name: '100 монет', icon: '💰', color: 'from-green-500 to-emerald-500', rarity: 'Обычный' },
    { id: 4, name: 'Эксклюзивный набор', icon: '🎁', color: 'from-red-500 to-rose-500', rarity: 'Легендарный' },
    { id: 5, name: '250 монет', icon: '🏅', color: 'from-blue-500 to-cyan-500', rarity: 'Редкий' },
    { id: 6, name: 'Бустер опыта', icon: '⚡', color: 'from-indigo-500 to-purple-500', rarity: 'Эпический' },
    { id: 7, name: '50 монет', icon: '🎯', color: 'from-teal-500 to-green-500', rarity: 'Обычный' },
  ];

  const spinRoulette = () => {
    if (spinning || spinsLeft <= 0) return;

    setSpinning(true);
    setWonPrize(null);
    
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const degreesPerSegment = 360 / prizes.length;
    const extraSpins = 5;
    const targetRotation = (extraSpins * 360) + (360 - (randomIndex * degreesPerSegment)) + (degreesPerSegment / 2);
    
    setRotation(rotation + targetRotation);
    setSpinsLeft(spinsLeft - 1);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(prizes[randomIndex]);
    }, 4000);
  };

  return (
    <Card className="bg-gradient-to-br from-card to-muted border-2 border-primary/30 overflow-hidden">
      <CardHeader className="text-center">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-sm">
            <Icon name="Ticket" className="mr-1" size={14} />
            Попыток: {spinsLeft}
          </Badge>
          <Badge className="bg-primary text-primary-foreground">Ежедневная рулетка</Badge>
        </div>
        <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
          <Icon name="Sparkles" size={32} />
          Испытай удачу!
        </CardTitle>
        <CardDescription className="text-base">
          Крути рулетку и получай эксклюзивные награды
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="relative w-full max-w-md mx-auto aspect-square">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"></div>
          
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary drop-shadow-lg"></div>
            </div>

            <div 
              className="relative w-full h-full rounded-full border-8 border-primary shadow-2xl shadow-primary/50"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
              }}
            >
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                return (
                  <div
                    key={prize.id}
                    className={`absolute w-full h-full`}
                    style={{
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    <div 
                      className={`absolute left-1/2 top-0 -translate-x-1/2 w-0 h-0`}
                      style={{
                        borderLeft: 'calc(50% - 4px) solid transparent',
                        borderRight: 'calc(50% - 4px) solid transparent',
                        borderTop: `50% solid hsl(var(--${index % 2 === 0 ? 'primary' : 'secondary'}))`,
                        opacity: 0.8,
                      }}
                    ></div>
                    
                    <div 
                      className="absolute left-1/2 top-[15%] -translate-x-1/2 text-center"
                    >
                      <div className="text-3xl mb-1">{prize.icon}</div>
                      <div className="text-[10px] font-semibold text-white drop-shadow-lg whitespace-nowrap">
                        {prize.name}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-xl">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Button
            size="lg"
            onClick={spinRoulette}
            disabled={spinning || spinsLeft <= 0}
            className="px-12 py-6 text-lg font-bold hover-scale disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {spinning ? (
              <>
                <Icon name="Loader2" className="mr-2 animate-spin" size={24} />
                Вращается...
              </>
            ) : spinsLeft <= 0 ? (
              <>
                <Icon name="Clock" className="mr-2" size={24} />
                Возвращайся завтра
              </>
            ) : (
              <>
                <Icon name="Play" className="mr-2" size={24} />
                Крутить рулетку
              </>
            )}
          </Button>

          {wonPrize && (
            <div className="animate-scale-in">
              <Card className={`bg-gradient-to-r ${wonPrize.color} border-0 text-white`}>
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-3">{wonPrize.icon}</div>
                  <Badge className="bg-white/20 text-white mb-2">{wonPrize.rarity}</Badge>
                  <h3 className="text-2xl font-bold mb-1">Поздравляем!</h3>
                  <p className="text-lg">Вы выиграли: {wonPrize.name}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {prizes.slice(0, 4).map((prize) => (
            <div
              key={prize.id}
              className={`p-3 rounded-lg bg-gradient-to-br ${prize.color} opacity-70 hover:opacity-100 transition-opacity text-center`}
            >
              <div className="text-2xl mb-1">{prize.icon}</div>
              <div className="text-xs text-white font-semibold">{prize.name}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameRoulette;
