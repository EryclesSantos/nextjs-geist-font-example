"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ForumMessage {
  id: number;
  username: string;
  message: string;
  timestamp: Date;
  legend: string;
}

export default function UrbanLegendsForum() {
  const [messages, setMessages] = useState<ForumMessage[]>([
    {
      id: 1,
      username: "MariaSilva",
      message: "Minha avó sempre contava sobre a Loira do Banheiro na escola dela. Ela dizia que uma menina realmente desapareceu lá nos anos 80...",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      legend: "Loira do Banheiro"
    },
    {
      id: 2,
      username: "CarlosRJ",
      message: "Aqui no Rio, todo mundo conhece a história do Homem do Saco. Minha mãe usava essa história para me fazer dormir cedo quando eu era criança!",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      legend: "Homem do Saco"
    }
  ]);
  
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [selectedLegend, setSelectedLegend] = useState('');
  const [error, setError] = useState('');

  const legends = [
    "Loira do Banheiro",
    "Homem do Saco", 
    "Mulher de Branco",
    "Noiva da Morte",
    "Chupa-cabra",
    "Mula sem Cabeça",
    "Curupira",
    "Outro"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !message.trim() || !selectedLegend.trim()) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const newMessage: ForumMessage = {
      id: messages.length + 1,
      username: username.trim(),
      message: message.trim(),
      timestamp: new Date(),
      legend: selectedLegend
    };

    setMessages([newMessage, ...messages]);
    setUsername('');
    setMessage('');
    setSelectedLegend('');
    setError('');
  };

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Fórum de Lendas Urbanas
          </CardTitle>
          <p className="text-center text-gray-600">
            Compartilhe suas experiências e histórias sobre lendas urbanas brasileiras
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                  Seu Nome
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu nome"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="legend" className="block text-sm font-medium mb-2">
                  Lenda Relacionada
                </label>
                <select
                  id="legend"
                  value={selectedLegend}
                  onChange={(e) => setSelectedLegend(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione uma lenda</option>
                  {legends.map((legend) => (
                    <option key={legend} value={legend}>
                      {legend}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Sua História ou Comentário
              </label>
              <Textarea
                id="message"
                placeholder="Conte sua experiência, história ou opinião sobre lendas urbanas..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full min-h-[120px]"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full md:w-auto">
              Publicar História
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">
          Histórias da Comunidade ({messages.length})
        </h3>
        
        {messages.map((msg) => (
          <Card key={msg.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <span className="font-semibold text-blue-600">
                    {msg.username}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {msg.legend}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {msg.message}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
