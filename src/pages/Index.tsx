import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Все проекты' },
    { id: 'commercial', label: 'Реклама' },
    { id: 'corporate', label: 'Корпоративное' },
    { id: 'social', label: 'Соцсети' },
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Рекламный ролик для Tech стартапа',
      category: 'commercial',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '0:45',
    },
    {
      id: 2,
      title: 'Корпоративная презентация IT компании',
      category: 'corporate',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:30',
    },
    {
      id: 3,
      title: 'Вирусный контент для Instagram',
      category: 'social',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '0:15',
    },
    {
      id: 4,
      title: 'Промо ролик для Fashion бренда',
      category: 'commercial',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:20',
    },
    {
      id: 5,
      title: 'Продуктовое видео для e-commerce',
      category: 'commercial',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:00',
    },
    {
      id: 6,
      title: 'Репортаж с корпоративного события',
      category: 'corporate',
      thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:15',
    },
  ];

  const services = [
    { icon: 'Video', title: 'Рекламные ролики', description: 'Создание продающей видеорекламы для всех digital-каналов и ТВ' },
    { icon: 'Camera', title: 'Съемка и продакшн', description: 'Полный цикл видеопроизводства от идеи до готового контента' },
    { icon: 'Sparkles', title: 'Анимация и графика', description: 'Моушн-дизайн, 2D/3D анимация и визуальные эффекты' },
    { icon: 'Share2', title: 'Контент для соцсетей', description: 'Вирусные видео для Instagram, TikTok, YouTube Shorts' },
  ];

  const pricing = [
    { name: 'Старт', price: '50 000', features: ['Видео до 1 минуты', '1 день съемки', 'Базовый монтаж', 'Цветокоррекция', 'Фоновая музыка'] },
    { name: 'Профи', price: '150 000', features: ['Видео до 3 минут', '2 дня съемки', 'Продвинутый монтаж', 'Моушн-графика', 'Саунд-дизайн', 'Сценарий'] },
    { name: 'Премиум', price: '500 000', features: ['Любая длительность', 'Неограниченная съемка', 'Полный продакшн', '3D анимация', 'Профессиональная озвучка', 'Режиссура'] },
  ];

  const blog = [
    { title: 'Тренды видеомаркетинга 2024: что работает', date: '15 октября 2024', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80' },
    { title: 'Как увеличить охват видео в соцсетях', date: '8 октября 2024', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80' },
    { title: 'Секреты качественной видеосъемки', date: '1 октября 2024', image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600&q=80' },
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">VideoStudio</h1>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Кейсы</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Связаться
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Видео, которое
              <span className="block text-primary">продает</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Создаем вирусный видеоконтент для брендов, которые хотят быть замеченными
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть шоурил
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Обсудить проект
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">300+</div>
                <p className="text-muted-foreground">Реализованных проектов</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">50M+</div>
                <p className="text-muted-foreground">Просмотров</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши кейсы</h2>
            <p className="text-lg text-muted-foreground">Портфолио проектов, которые работают</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'bg-primary' : ''}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <Card 
                key={item.id} 
                className="bg-card border-border overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300"
                onClick={() => setSelectedVideo(item.videoUrl)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Play" size={28} />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-black/70">
                    {item.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedVideo(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            <iframe
              src={selectedVideo}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр видеопродакшна для вашего бренда</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Цены</h2>
            <p className="text-lg text-muted-foreground">Пакеты услуг для любого бюджета</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-primary transition-all duration-300 ${index === 1 ? 'md:scale-105' : ''}`}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground">Полезные материалы о видеомаркетинге</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blog.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">VideoStudio</h3>
              <p className="text-muted-foreground text-sm">Профессиональное видеопроизводство</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Корпоративное видео</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контент для соцсетей</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@videostudio.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 VideoStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;