import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  {
    id: 1,
    title: 'Абстрактное искусство',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/dd5763d3-4d4c-4dad-93e4-0ed49bcd76dc.jpg'
  },
  {
    id: 2,
    title: 'Графический постер',
    category: 'Графика',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/15e086e3-810f-4d72-bcc0-6875af53bc97.jpg'
  },
  {
    id: 3,
    title: 'Брендинг студии',
    category: 'Брендинг',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/bc7c9601-7670-4ddd-b868-fde3c573ee1e.jpg'
  },
  {
    id: 4,
    title: 'Цифровая иллюстрация',
    category: 'Дизайн',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/dd5763d3-4d4c-4dad-93e4-0ed49bcd76dc.jpg'
  },
  {
    id: 5,
    title: 'Типографика',
    category: 'Графика',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/15e086e3-810f-4d72-bcc0-6875af53bc97.jpg'
  },
  {
    id: 6,
    title: 'Визуальная айдентика',
    category: 'Брендинг',
    image: 'https://cdn.poehali.dev/projects/1f513828-6358-40eb-b09f-fde702215a82/files/bc7c9601-7670-4ddd-b868-fde3c573ee1e.jpg'
  }
];

const categories = ['Все', 'Дизайн', 'Графика', 'Брендинг'];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredItems = activeCategory === 'Все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Creative Studio</h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✨ Креативная студия
            </Badge>
            <h2 className="text-6xl md:text-7xl font-extrabold mb-6 gradient-text leading-tight">
              Творим<br/>необычное
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Превращаем смелые идеи в яркие визуальные истории, которые запоминаются
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-8">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть работы
              </Button>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left text-center">
              <div className="text-4xl font-bold gradient-text mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Проектов</div>
            </div>
            <div className="animate-slide-in-left [animation-delay:100ms] text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
            <div className="animate-slide-in-left [animation-delay:200ms] text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
            <div className="animate-slide-in-left [animation-delay:300ms] text-center">
              <div className="text-4xl font-bold gradient-text mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Наград</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                О студии
              </Badge>
              <h3 className="text-4xl font-bold mb-6">
                Мы создаем <span className="gradient-text">визуальную магию</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Наша команда — это союз дизайнеров, иллюстраторов и креативных мыслителей, которые верят в силу визуального искусства.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Каждый проект для нас — это возможность создать что-то уникальное, что выделит ваш бренд среди тысяч других.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-secondary to-primary">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-2 hover:border-primary transition-all hover:scale-105 duration-300">
                <Icon name="Palette" size={32} className="text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Дизайн</h4>
                <p className="text-sm text-muted-foreground">Создаем уникальные визуальные решения</p>
              </Card>
              <Card className="p-6 border-2 hover:border-secondary transition-all hover:scale-105 duration-300 mt-8">
                <Icon name="Sparkles" size={32} className="text-secondary mb-4" />
                <h4 className="font-bold text-lg mb-2">Креатив</h4>
                <p className="text-sm text-muted-foreground">Нестандартные идеи и решения</p>
              </Card>
              <Card className="p-6 border-2 hover:border-accent transition-all hover:scale-105 duration-300">
                <Icon name="Zap" size={32} className="text-accent mb-4" />
                <h4 className="font-bold text-lg mb-2">Инновации</h4>
                <p className="text-sm text-muted-foreground">Используем новейшие технологии</p>
              </Card>
              <Card className="p-6 border-2 hover:border-primary transition-all hover:scale-105 duration-300 mt-8">
                <Icon name="Award" size={32} className="text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Качество</h4>
                <p className="text-sm text-muted-foreground">Только премиум результаты</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 gradient-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Портфолио
            </Badge>
            <h3 className="text-5xl font-bold mb-6 gradient-text">
              Наши работы
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — это история успеха и креативности
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category 
                  ? "bg-gradient-to-r from-primary to-secondary" 
                  : "hover:border-primary"}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <Badge className="mb-2 bg-primary">{item.category}</Badge>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 hover:border-primary">
              <Icon name="Grid" className="mr-2" size={20} />
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary via-secondary to-accent p-12 rounded-3xl text-center text-white">
            <Icon name="Rocket" size={64} className="mx-auto mb-6 animate-float" />
            <h3 className="text-4xl font-bold mb-4">
              Готовы начать проект?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Расскажите нам о своей идее, и мы воплотим её в жизнь с яркостью и креативом
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 gradient-text">Creative Studio</h4>
              <p className="text-sm opacity-80">Творим яркое будущее вместе с вами</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Услуги</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Брендинг</li>
                <li>Дизайн</li>
                <li>Иллюстрация</li>
                <li>Анимация</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Соцсети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-background/20 hover:bg-background/10">
                  <Icon name="Twitter" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 Creative Studio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
