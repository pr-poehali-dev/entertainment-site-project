import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  name: string;
  chips: number;
  position: string;
  isActive: boolean;
  isFolded: boolean;
  bet: number;
}

const PokerTable = () => {
  const [pot, setPot] = useState(1500);
  const [myChips, setMyChips] = useState(10000);
  const [betAmount, setBetAmount] = useState([100]);
  const [gamePhase, setGamePhase] = useState<'preflop' | 'flop' | 'turn' | 'river'>('flop');

  const players: Player[] = [
    { id: 1, name: 'Вы', chips: myChips, position: 'BTN', isActive: true, isFolded: false, bet: 200 },
    { id: 2, name: 'Player_2', chips: 8500, position: 'SB', isActive: false, isFolded: false, bet: 100 },
    { id: 3, name: 'Player_3', chips: 12000, position: 'BB', isActive: false, isFolded: false, bet: 200 },
    { id: 4, name: 'Player_4', chips: 5500, position: 'UTG', isActive: false, isFolded: true, bet: 0 },
    { id: 5, name: 'Player_5', chips: 15000, position: 'MP', isActive: false, isFolded: false, bet: 200 },
  ];

  const communityCards = [
    { suit: '♥️', rank: 'A', color: 'red' },
    { suit: '♠️', rank: 'K', color: 'black' },
    { suit: '♦️', rank: 'Q', color: 'red' },
    { suit: '♣️', rank: 'J', color: 'black' },
    { suit: '♥️', rank: '10', color: 'red' },
  ];

  const myCards = [
    { suit: '♠️', rank: 'A', color: 'black' },
    { suit: '♠️', rank: 'K', color: 'black' },
  ];

  const visibleCards = gamePhase === 'flop' ? 3 : gamePhase === 'turn' ? 4 : gamePhase === 'river' ? 5 : 0;

  const handleFold = () => {
    alert('Вы сбросили карты');
  };

  const handleCall = () => {
    const callAmount = 200;
    setMyChips(myChips - callAmount);
    setPot(pot + callAmount);
  };

  const handleRaise = () => {
    const raiseAmount = betAmount[0];
    setMyChips(myChips - raiseAmount);
    setPot(pot + raiseAmount);
  };

  return (
    <Card className="bg-gradient-to-br from-green-900 to-green-950 border-4 border-amber-600 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-amber-700 to-amber-800 border-b-4 border-amber-600">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-bold text-white flex items-center gap-2">
              <span className="text-4xl">🎴</span>
              Покерный стол
            </CardTitle>
            <CardDescription className="text-amber-100 text-base">
              Texas Hold'em • Блайнды: $50/$100
            </CardDescription>
          </div>
          <Badge className="bg-red-500 text-white text-lg px-4 py-2 pulse-glow">
            <Icon name="Users" className="mr-2" size={20} />
            5/9 игроков
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <div className="relative">
          <div className="bg-green-800 rounded-full border-8 border-amber-700 shadow-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-700/30 to-transparent"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="bg-amber-900/80 backdrop-blur-sm rounded-2xl px-8 py-6 border-4 border-amber-600 shadow-xl">
                <div className="text-sm text-amber-200 mb-2">Банк</div>
                <div className="text-5xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Coins" className="text-amber-400" size={40} />
                  ${pot.toLocaleString()}
                </div>
                <Badge className="bg-green-600 text-white text-base px-4 py-1">
                  {gamePhase === 'preflop' ? 'Префлоп' : 
                   gamePhase === 'flop' ? 'Флоп' : 
                   gamePhase === 'turn' ? 'Тёрн' : 'Ривер'}
                </Badge>
              </div>

              <div className="mt-6 flex gap-3 justify-center">
                {communityCards.slice(0, visibleCards).map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-2xl w-16 h-24 flex flex-col items-center justify-center border-2 border-gray-300 transform hover:scale-110 transition-transform animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-3xl font-bold ${card.color === 'red' ? 'text-red-600' : 'text-black'}`}>
                      {card.rank}
                    </div>
                    <div className="text-2xl">{card.suit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 relative z-0">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className={`text-center ${player.isFolded ? 'opacity-40' : ''}`}
                >
                  <div className={`bg-gradient-to-br ${
                    player.isActive 
                      ? 'from-primary to-secondary ring-4 ring-primary' 
                      : 'from-gray-700 to-gray-800'
                  } rounded-xl p-4 shadow-xl transform hover:scale-105 transition-all`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={player.isActive ? 'default' : 'secondary'} className="text-xs">
                        {player.position}
                      </Badge>
                      {player.bet > 0 && (
                        <Badge className="bg-amber-500 text-white text-xs">
                          ${player.bet}
                        </Badge>
                      )}
                    </div>
                    <div className="text-white font-bold mb-1">{player.name}</div>
                    <div className="text-amber-400 text-sm flex items-center justify-center gap-1">
                      <Icon name="Coins" size={14} />
                      ${player.chips.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border-2 border-primary">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ваши карты</h3>
                <div className="flex gap-3">
                  {myCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-2xl w-20 h-28 flex flex-col items-center justify-center border-2 border-primary hover-scale"
                    >
                      <div className={`text-4xl font-bold ${card.color === 'red' ? 'text-red-600' : 'text-black'}`}>
                        {card.rank}
                      </div>
                      <div className="text-3xl">{card.suit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-400 mb-2">Ваши фишки</div>
                <div className="text-4xl font-bold text-primary flex items-center gap-2">
                  <Icon name="Wallet" size={32} />
                  ${myChips.toLocaleString()}
                </div>
                <Badge className="mt-2 bg-green-600 text-white">Флеш Рояль</Badge>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">Размер ставки</span>
                  <span className="text-primary font-bold text-xl">${betAmount[0]}</span>
                </div>
                <Slider
                  value={betAmount}
                  onValueChange={setBetAmount}
                  min={100}
                  max={myChips}
                  step={50}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Мин: $100</span>
                  <span>Макс: ${myChips.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={handleFold}
                  className="text-lg font-bold"
                >
                  <Icon name="X" className="mr-2" size={20} />
                  Fold
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleCall}
                  className="text-lg font-bold"
                >
                  <Icon name="Check" className="mr-2" size={20} />
                  Call $200
                </Button>
                <Button
                  size="lg"
                  onClick={handleRaise}
                  className="text-lg font-bold bg-gradient-to-r from-primary to-secondary"
                >
                  <Icon name="TrendingUp" className="mr-2" size={20} />
                  Raise ${betAmount[0]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PokerTable;
