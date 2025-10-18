import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Video',
      title: 'Видеосъёмка роликов',
      description: 'Профессиональная съёмка рекламных и корпоративных роликов в студии с полным циклом производства',
      price: 'от 50 000 ₽'
    },
    {
      icon: 'Tv',
      title: 'Стриминг и трансляции',
      description: 'Организация прямых эфиров, онлайн-конференций и вебинаров с качественным звуком и картинкой',
      price: 'от 30 000 ₽'
    },
    {
      icon: 'Film',
      title: 'Монтаж и постпродакшн',
      description: 'Профессиональный монтаж, цветокоррекция, спецэффекты и озвучка ваших проектов',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Mic',
      title: 'Подкасты и интервью',
      description: 'Запись подкастов и интервью в комфортной студийной обстановке с профессиональным звуком',
      price: 'от 20 000 ₽'
    },
    {
      icon: 'Camera',
      title: 'Фотосессии',
      description: 'Студийная фотосъёмка продукции, портретов и коммерческой фотографии',
      price: 'от 10 000 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Креативный контент',
      description: 'Разработка концепции, сценария и создание уникального визуального контента',
      price: 'от 40 000 ₽'
    }
  ];

  const studios = [
    {
      name: 'Зал 1 — Циклорама',
      image: 'https://cdn.poehali.dev/projects/fbce2d6a-5d28-47fd-add5-604e99b2a1de/files/7c095e10-6405-4c61-b006-2d1717771623.jpg',
      area: '80 м²',
      features: ['Белая циклорама', 'Профессиональный свет', '4K камеры', 'Хромакей']
    },
    {
      name: 'Зал 2 — Павильон',
      image: 'https://cdn.poehali.dev/projects/fbce2d6a-5d28-47fd-add5-604e99b2a1de/files/da0c8332-57b5-4d7c-b1a1-094443e905e5.jpg',
      area: '120 м²',
      features: ['Зелёный экран', 'LED подсветка', 'Звукоизоляция', 'Несколько зон']
    },
    {
      name: 'Зал 3 — Студия',
      image: 'https://cdn.poehali.dev/projects/fbce2d6a-5d28-47fd-add5-604e99b2a1de/files/20e135af-fae4-4567-a539-bdb692c32579.jpg',
      area: '60 м²',
      features: ['Интерьерная зона', 'Естественный свет', 'Gimbal системы', 'Лофт-дизайн']
    }
  ];

  const portfolio = [
    { title: 'Рекламный ролик — TechCorp', category: 'Реклама', views: '2.5M' },
    { title: 'Корпоративное видео — StartUp', category: 'Корпоратив', views: '1.2M' },
    { title: 'Музыкальный клип — Артист', category: 'Музыка', views: '5.8M' },
    { title: 'Подкаст — Бизнес-интервью', category: 'Подкаст', views: '890K' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Video" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-glow">PRO STREAM</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Услуги', 'Залы', 'Портфолио', 'Цены', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/80 text-background font-semibold">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/20 text-secondary border-secondary neon-border">
                Профессиональная видеостудия
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Создаём контент
                <span className="block text-primary text-glow">будущего</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Современная студия с передовым оборудованием для видеопроизводства любой сложности.
                От идеи до финального продукта — всё в одном месте.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-background font-semibold neon-border">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть портфолио
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Связаться
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary text-glow">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">3</div>
                  <div className="text-sm text-muted-foreground">Студии</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступность</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-glow-pulse"></div>
              <img
                src="https://cdn.poehali.dev/projects/fbce2d6a-5d28-47fd-add5-604e99b2a1de/files/da0c8332-57b5-4d7c-b1a1-094443e905e5.jpg"
                alt="Студия"
                className="relative rounded-2xl shadow-2xl card-glow"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary mb-4">Наши услуги</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Полный спектр услуг
              <span className="block text-primary text-glow mt-2">видеопроизводства</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От концепции до финального монтажа — мы предоставляем все необходимые услуги
              для создания качественного видеоконтента
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:card-glow group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="залы" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary mb-4">Наши залы</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Современные студии
              <span className="block text-primary text-glow mt-2">с премиум оборудованием</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studios.map((studio, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 overflow-hidden group hover:card-glow transition-all">
                <div className="relative overflow-hidden">
                  <img
                    src={studio.image}
                    alt={studio.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-background">
                    {studio.area}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{studio.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {studio.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" className="text-primary" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30">
                    Забронировать зал
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary mb-4">Портфолио</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Наши работы
              <span className="block text-primary text-glow mt-2">говорят сами за себя</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-secondary text-secondary">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Eye" size={18} />
                      <span>{project.views} просмотров</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary group-hover:text-primary/80">
                      <Icon name="Play" className="mr-2" size={16} />
                      Смотреть
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary mb-4">Тарифы</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Прозрачное ценообразование
              <span className="block text-primary text-glow mt-2">без скрытых платежей</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Стандарт', price: '15 000', hours: '4 часа', features: ['Аренда студии', 'Базовое оборудование', 'Техподдержка'] },
              { name: 'Профи', price: '35 000', hours: '8 часов', features: ['Всё из Стандарт', 'Оператор', 'Свет и звук', 'Монтаж (2ч)'], highlight: true },
              { name: 'Премиум', price: '75 000', hours: 'Полный день', features: ['Всё из Профи', 'Режиссёр', 'Полный цикл', 'Цветокор'] }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`${
                  plan.highlight
                    ? 'bg-gradient-to-b from-primary/10 to-secondary/10 border-primary card-glow scale-105'
                    : 'bg-card/50 border-primary/20'
                } transition-all`}
              >
                <CardHeader>
                  {plan.highlight && (
                    <Badge className="bg-primary text-background mb-2 w-fit">Популярный</Badge>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <CardDescription className="text-muted-foreground pt-2">{plan.hours}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={18} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-primary hover:bg-primary/80 text-background'
                        : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6 bg-gradient-to-b from-transparent to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/20 text-secondary border-secondary mb-4">Контакты</Badge>
            <h2 className="text-5xl font-bold mb-4">
              Готовы начать проект?
              <span className="block text-primary text-glow mt-2">Свяжитесь с нами</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@pro-stream.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" className="bg-background/50 border-primary/20" />
                </div>
                <div>
                  <Input placeholder="Телефон" className="bg-background/50 border-primary/20" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="bg-background/50 border-primary/20" />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    className="bg-background/50 border-primary/20 min-h-32"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80 text-background font-semibold">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Video" className="text-primary" size={28} />
                <span className="text-xl font-bold text-glow">PRO STREAM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная видеостудия полного цикла для создания контента будущего
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Видеосъёмка</li>
                <li>Монтаж</li>
                <li>Аренда студии</li>
                <li>Оборудование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О студии</li>
                <li>Портфолио</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 PRO STREAM. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
