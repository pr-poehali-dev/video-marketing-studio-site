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
    { id: 'cottages', label: 'Коттеджи' },
    { id: 'townhouses', label: 'Таунхаусы' },
    { id: 'estates', label: 'Поселки' },
  ];

  const portfolio = [
    {
      id: 1,
      title: 'Видеотур по коттеджному поселку Березки',
      category: 'estates',
      thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:20',
    },
    {
      id: 2,
      title: 'Презентация коттеджа 450 м²',
      category: 'cottages',
      thumbnail: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:45',
    },
    {
      id: 3,
      title: 'Таунхаусы премиум-класса с высоты',
      category: 'townhouses',
      thumbnail: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '1:50',
    },
    {
      id: 4,
      title: 'Элитный коттедж на берегу озера',
      category: 'cottages',
      thumbnail: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '4:15',
    },
    {
      id: 5,
      title: 'Строительство поселка — таймлапс',
      category: 'estates',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '2:00',
    },
    {
      id: 6,
      title: 'Современные таунхаусы в Подмосковье',
      category: 'townhouses',
      thumbnail: 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '3:30',
    },
  ];

  const services = [
    { icon: 'Video', title: 'Видеотуры по объектам', description: 'Профессиональная съемка интерьеров и экстерьеров с 4K качеством и стабилизацией' },
    { icon: 'Plane', title: 'Аэросъемка с дрона', description: 'Панорамные виды территории, инфраструктуры и окружения с высоты птичьего полета' },
    { icon: 'Layout', title: '3D-презентации проектов', description: 'Анимация планировок, визуализация строительства и будущего благоустройства' },
    { icon: 'TrendingUp', title: 'Рекламные ролики', description: 'Продающие видео для застройщиков с акцентом на преимущества и образ жизни' },
  ];

  const pricing = [
    { name: 'Экспресс', price: '80 000', features: ['Видео до 2 минут', '1 день съемки', 'Съемка интерьера или территории', 'Цветокоррекция', 'Фоновая музыка'] },
    { name: 'Стандарт', price: '200 000', features: ['Видео до 5 минут', '2 дня съемки', 'Интерьер + экстерьер + дрон', 'Профессиональный монтаж', '3D-анимация планировки', 'Закадровый текст'] },
    { name: 'Комплекс', price: '600 000', features: ['Полноценный ролик 5-10 минут', 'Съемка нескольких объектов', 'Аэросъемка территории', 'Сценарий и режиссура', 'Интервью с жителями', 'Профессиональная озвучка'] },
  ];

  const blog = [
    { title: 'Почему видео увеличивает продажи загородной недвижимости на 85%', date: '20 октября 2024', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
    { title: 'Как снимать элитную недвижимость: 7 правил', date: '12 октября 2024', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
    { title: 'Аэросъемка поселков: технические аспекты', date: '5 октября 2024', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&q=80' },
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">EstateVideo</h1>
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
              Видео, которое продает
              <span className="block text-primary">загородную недвижимость</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Профессиональная видеосъемка для застройщиков и продавцов элитной загородной недвижимости
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Заказать съемку
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Снятых объектов</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">2.5 млрд</div>
                <p className="text-muted-foreground">Продано недвижимости</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-heading font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">Продаж с видео</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши кейсы</h2>
            <p className="text-lg text-muted-foreground">Портфолио загородной недвижимости</p>
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
            <p className="text-lg text-muted-foreground">Полный спектр видеопродакшна для загородной недвижимости</p>
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
            <p className="text-lg text-muted-foreground">Экспертные материалы о видеомаркетинге недвижимости</p>
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
              <h3 className="font-heading font-bold text-xl mb-4">EstateVideo</h3>
              <p className="text-muted-foreground text-sm">Видео для загородной недвижимости</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Видеотуры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аэросъемка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">3D-презентации</a></li>
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
                <li>info@estatevideo.ru</li>
                <li>+7 (495) 789-45-67</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 EstateVideo. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
