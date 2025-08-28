"use client";

import React from 'react';
import UrbanLegendsForum from '@/components/UrbanLegendsForum';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function UrbanLegendsPage() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/1920x500?text=Lendas+Urbanas+Brasileiras+Banner+Alternativo";
  };

  const legends = [
    {
      title: "A Loira do Banheiro",
      description: "Uma das lendas urbanas mais conhecidas do Brasil. Conta-se que o espírito de uma menina loira assombra banheiros de escolas, aparecendo quando alguém a chama três vezes.",
      origin: "Escolas brasileiras",
      danger: "Média",
      details: "A lenda varia entre regiões, mas geralmente envolve uma menina que morreu tragicamente e agora assombra banheiros escolares. Algumas versões dizem que ela puxa as pessoas para dentro do vaso sanitário."
    },
    {
      title: "O Homem do Saco",
      description: "Figura sinistra que carrega um saco nas costas, usado por pais para assustar crianças desobedientes. Diz-se que ele sequestra crianças que ficam na rua após o anoitecer.",
      origin: "Tradição oral brasileira",
      danger: "Alta",
      details: "Esta lenda serve como ferramenta educativa para manter crianças seguras. O Homem do Saco é descrito como um homem velho e sujo que coleta crianças em seu saco para nunca mais devolvê-las."
    },
    {
      title: "A Mulher de Branco",
      description: "Espírito de uma mulher vestida de branco que aparece em estradas, especialmente à noite. Alguns dizem que ela pede carona, outros que ela causa acidentes.",
      origin: "Estradas brasileiras",
      danger: "Alta",
      details: "Geralmente associada a uma mulher que morreu tragicamente, muitas vezes em acidentes de carro ou por amor não correspondido. Aparece principalmente em estradas desertas."
    },
    {
      title: "A Noiva da Morte",
      description: "Uma noiva que morreu no dia do casamento e agora assombra igrejas e cemitérios, buscando um noivo para acompanhá-la na eternidade.",
      origin: "Igrejas e cemitérios",
      danger: "Média",
      details: "Esta lenda fala de uma noiva que foi abandonada no altar ou morreu antes do casamento. Ela aparece vestida de noiva, procurando por alguém para se casar na morte."
    },
    {
      title: "O Chupa-cabra",
      description: "Criatura misteriosa que ataca animais, especialmente cabras, sugando seu sangue. Avistamentos foram relatados em várias regiões do Brasil.",
      origin: "Zonas rurais",
      danger: "Alta",
      details: "Descrito como uma criatura reptiliana com espinhos nas costas, olhos vermelhos e garras afiadas. Ataca principalmente animais domésticos durante a noite."
    },
    {
      title: "A Mula sem Cabeça",
      description: "Criatura do folclore brasileiro que é resultado de uma maldição. Uma mulher que teve relações com um padre se transforma nesta criatura às quintas-feiras.",
      origin: "Folclore religioso",
      danger: "Média",
      details: "A mula sem cabeça galopa pelas ruas nas noites de quinta-feira, soltando fogo pelas narinas. A maldição só pode ser quebrada se alguém conseguir tirar o freio de sua boca."
    },
    {
      title: "O Curupira",
      description: "Protetor das florestas com pés virados para trás. Confunde caçadores e pessoas que fazem mal à natureza, fazendo-os se perder na mata.",
      origin: "Florestas brasileiras",
      danger: "Baixa",
      details: "Pequeno índio de cabelos vermelhos e pés virados para trás. Protege a floresta e os animais, punindo aqueles que desrespeitam a natureza."
    },
    {
      title: "O Lobisomem",
      description: "Homem que se transforma em lobo nas noites de lua cheia. Geralmente é o sétimo filho homem de uma família, amaldiçoado a viver esta transformação.",
      origin: "Tradição europeia adaptada",
      danger: "Alta",
      details: "A transformação acontece nas sextas-feiras de lua cheia. O lobisomem perde a consciência humana e pode atacar pessoas e animais durante a transformação."
    }
  ];

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="https://placehold.co/1920x500?text=Misterioso+mundo+das+lendas+urbanas+brasileiras+com+atmosfera+sombria+e+envolvente"
          alt="Misterioso mundo das lendas urbanas brasileiras com atmosfera sombria e envolvente"
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Lendas Urbanas
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Descubra Histórias e Mitos do Brasil
            </p>
            <p className="text-lg max-w-2xl mx-auto">
              Explore o fascinante e misterioso mundo das lendas urbanas brasileiras. 
              Conheça as histórias que passam de geração em geração e compartilhe suas próprias experiências.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            O Que São Lendas Urbanas?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As lendas urbanas são histórias que circulam entre as pessoas, geralmente apresentadas como verdadeiras, 
            mas que misturam elementos reais com ficção. Elas refletem nossos medos, valores culturais e servem 
            como forma de transmitir ensinamentos morais. No Brasil, essas histórias são ricas em diversidade 
            cultural e regional, incorporando elementos do folclore indígena, africano e europeu.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <p className="text-gray-600">Lendas Principais</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Anos de Tradição</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">27</div>
              <p className="text-gray-600">Estados com Variações</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Legends Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Principais Lendas Urbanas Brasileiras
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legends.map((legend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {legend.title}
                    </CardTitle>
                    <Badge className={getDangerColor(legend.danger)}>
                      {legend.danger}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {legend.origin}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {legend.description}
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Detalhes:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {legend.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Impacto Cultural das Lendas Urbanas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Educação e Moral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Muitas lendas servem como ferramentas educativas, ensinando crianças sobre segurança 
                  e comportamento adequado através de histórias memoráveis.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Preservação Cultural</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  As lendas urbanas preservam elementos da cultura brasileira, misturando tradições 
                  indígenas, africanas e europeias em narrativas únicas.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Essas histórias continuam evoluindo na era digital, adaptando-se aos novos contextos urbanos 
            e tecnológicos, mas mantendo sua essência de transmitir valores e medos coletivos. 
            Elas representam uma forma única de folclore contemporâneo que conecta gerações.
          </p>
        </div>
      </section>

      {/* Forum Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Compartilhe Sua Experiência
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Você já teve alguma experiência com lendas urbanas? Conhece alguma história local? 
              Participe da nossa comunidade e compartilhe suas histórias!
            </p>
          </div>
          
          <UrbanLegendsForum />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Lendas Urbanas do Brasil</h3>
          <p className="text-gray-300 mb-4">
            Preservando e compartilhando as histórias que fazem parte da nossa cultura.
          </p>
          <p className="text-sm text-gray-400">
            © 2024 - Projeto educativo sobre folclore e lendas urbanas brasileiras
          </p>
        </div>
      </footer>
    </div>
  );
}
