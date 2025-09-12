const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Lógica simples de verificação de credenciais
    if (email === 'admin@admin.com' && password === 'admin123') {
        // Se as credenciais estiverem corretas, envie uma resposta de sucesso com um token
        const token = 'meu-token-secreto-123';
        res.json({ token });
    } else {
        // Se estiverem incorretas, envie um erro 401 (Não Autorizado)
        res.status(401).send('Credenciais inválidas.');
    }
});


app.use('/assets', express.static(path.join(__dirname, '../frontend/src/assets')));
// Dados de exemplo (simulando um banco de dados)
let categories = [
    { id: 1, name: 'Viagem em Família' },
    { id: 2, name: 'Aventura' },
    { id: 3, name: 'Cultura e História' },
    { id: 4, name: 'Gastronomia' },
    { id: 5, name: 'Viagem Solo' },
    { id: 6, name: 'Natureza e Vida Selvagem' },
    { id: 7, name: 'Praias Paradisíacas' }
];
let nextCategoryId = 8;


let posts = [
    { 
        id: 1, 
      title: 'Guia Completo para Walt Disney World em Orlando', 
        content: `
            <p>Preparar uma viagem para o Walt Disney World em Orlando pode parecer desafiador, mas com um bom planejamento, você pode ter a experiência mais mágica da sua vida! Este guia rápido vai te ajudar a desvendar os segredos dos parques e aproveitar cada momento.</p>
            
            <h3>Os Quatro Reinos Mágicos</h3>
            <p>O complexo de Walt Disney World é composto por quatro parques temáticos principais, cada um com sua própria magia:</p>
            <ul>
                <li><strong>Magic Kingdom:</strong> Onde a fantasia se torna realidade. Visite o icônico Castelo da Cinderela, encontre personagens clássicos e assista aos desfiles inesquecíveis.</li>
                <li><strong>Epcot:</strong> Uma celebração da cultura mundial e da inovação. Explore o World Showcase com seus 11 pavilhões de países e as futuristas atrações do Future World.</li>
                <li><strong>Hollywood Studios:</strong> Onde os filmes ganham vida! Embarque em missões galácticas em Star Wars: Galaxy's Edge e sinta a adrenalina na atração da Torre do Terror.</li>
                <li><strong>Animal Kingdom:</strong> Uma aventura pela natureza e pela vida selvagem. Faça um safári pela savana africana ou explore o mundo bioluminescente de Pandora - The World of Avatar.</li>
            </ul>

            <h3>Dicas de Ouro para sua Viagem</h3>
            <p>Para otimizar sua visita, use o aplicativo My Disney Experience para fazer reservas, ver mapas e verificar o tempo de espera das filas. Considere o uso do <strong>Genie+</strong> e do <strong>Lightning Lane</strong> para economizar tempo nas atrações mais populares. Lembre-se de beber bastante água e usar protetor solar, o calor de Orlando pode ser intenso!</p>

            <h3>Eventos Especiais e Gastronomia</h3>
            <p>O Walt Disney World é famoso por seus eventos sazonais, como o Epcot International Food & Wine Festival e as celebrações de Natal. A gastronomia é uma atração à parte; faça reservas para os restaurantes com personagens ou experimente as delícias de cada parque. Não se esqueça de provar o famoso Dole Whip!</p>
            
            <p>Com um pouco de pesquisa e planejamento, sua viagem a Walt Disney World será uma experiência inesquecível para toda a família.</p>
        `, 
        categoryId: 1, 
        clicks: 120, 
        image: 'disney.jpg',
        detailImage: 'disney2.jpg',
        date: '2024-10-01' 
    },
    {        id: 2, 
        title: 'Malta: História, Praias e Sol no Mediterrâneo', 
        content: `
            <p>Malta é um pequeno arquipélago no coração do Mediterrâneo, mas seu tamanho contrasta com a riqueza de sua história e a beleza de suas paisagens. Com uma mistura de influências árabes, italianas e britânicas, a ilha oferece uma experiência cultural e natural única.</p>
            
            <h3>História e Arquitetura</h3>
            <p>Comece sua viagem pela capital, Valeta, uma cidade-fortaleza construída pelos Cavaleiros de São João. Caminhe por suas ruas estreitas, visite a Co-Catedral de São João e admire a arquitetura barroca. Mdina, a antiga capital, é uma cidade murada que parece ter parado no tempo, perfeita para uma tarde de exploração.</p>
            
            <h3>Praias e Mergulho</h3>
            <p>Malta é um paraíso para os amantes do sol e do mar. A ilha de Comino é famosa por sua Blue Lagoon (Lagoa Azul), com águas cristalinas e ideais para nado e snorkel. Para quem gosta de mergulho, a costa de Gozo oferece naufrágios e cavernas subaquáticas para explorar. As praias de areia dourada de Mellieħa e Għajn Tuffieħa são perfeitas para relaxar.</p>
            
            <h3>Gastronomia e Vida Noturna</h3>
            <p>A culinária maltesa é uma deliciosa fusão de sabores. Experimente o "pastizzi" (salgados recheados), o "fenkata" (coelho) e os frutos do mar frescos. Para a vida noturna, St. Julian's é o centro da agitação, com bares, clubes e restaurantes para todos os gostos.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar Malta é na primavera ou no outono, quando o clima é agradável e a ilha está menos lotada. Use sapatos confortáveis para as caminhadas nas cidades históricas. Leve protetor solar e chapéu, pois o sol é muito forte, especialmente no verão.</p>
        `, 
        categoryId: 3, 
        clicks: 85, 
        image: 'malta.jpg', 
        detailImage: 'malta2.jpg', 
        date: '2025-04-09'
    },
    {   id: 3, 
        title: 'Bahamas: Praias de Areia Branca e Mergulho', 
        content: `
            <p>As Bahamas são um arquipélago de ilhas no Oceano Atlântico, famosas por suas praias de areia branca, águas de um azul deslumbrante e uma vibrante cultura caribenha. Com mais de 700 ilhas e ilhotas, é um paraíso para relaxar, mergulhar e explorar. O que torna este destino único é a grande variedade de ilhas, cada uma com uma personalidade diferente.</p>
            
            <h3>Nassau e a Ilha de Paradise</h3>
            <p>Comece sua aventura na capital, Nassau, com sua arquitetura colorida e lojas movimentadas. A pouca distância, a Ilha de Paradise oferece resorts de luxo, o famoso Atlantis Resort com seus enormes aquários e o Aquaventure, um parque aquático com escorregadores que passam por um túnel de tubarões. É o lugar ideal para famílias e quem busca entretenimento.</p>
            
            <h3>Exumas e os Porcos Nadadores</h3>
            <p>Para uma experiência mais autêntica e inesquecível, visite as Exumas, um grupo de ilhas paradisíacas. Aqui, você pode nadar com os famosos porcos nadadores em Big Major Cay. Além disso, a região oferece mergulho e snorkel em águas incrivelmente claras, com jardins de corais e vida marinha abundante.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar as Bahamas é durante a estação seca (de novembro a abril). Leve roupas leves, protetor solar e repelente, pois os mosquitos podem ser um problema ao entardecer. Para se mover entre as ilhas, você pode pegar voos domésticos ou usar ferries. A culinária local, com pratos como o "conch salad" (salada de conchas) e o peixe frito, é uma delícia. As Bahamas são a escolha perfeita para quem busca um pedacinho do paraíso.</p>
        `, 
        categoryId: 7, 
        clicks: 250, 
        image: 'bahamas.jpg', 
        detailImage: 'bahamas2.jpg',
        date: '2025-01-07'
    }, 
    {  id: 4, 
        title: 'Las Vegas: A Capital Mundial do Entretenimento', 
        content: `
            <p>Conhecida como a "Cidade do Pecado", Las Vegas é um destino de entretenimento sem igual, onde luxo, shows e a vida noturna se misturam em um cenário desértico. Mais do que apenas jogos, Vegas oferece uma experiência completa, de culinária de alta classe a espetáculos de tirar o fôlego.</p>
            
            <h3>A Famosa "Strip"</h3>
            <p>O coração de Las Vegas é a Strip, uma avenida de 6,8 km onde se encontram os hotéis temáticos mais famosos, como o Bellagio (com suas fontes dançantes), o Caesars Palace e o Venetian (com seus canais e gôndolas). Caminhar pela Strip à noite é uma experiência mágica, com luzes e sons por todos os lados.</p>
            
            <h3>Shows e Entretenimento</h3>
            <p>Vegas é o lar de alguns dos melhores shows do mundo. De espetáculos do Cirque du Soleil a apresentações de mágica e shows de comédia, há opções para todos os gostos. Verifique a programação com antecedência e compre seus ingressos online para garantir o seu lugar.</p>
            
            <h3>Atividades Além dos Cassinos</h3>
            <p>Além dos jogos, Las Vegas oferece muitas atividades. Você pode fazer um tour de helicóptero sobre o Grand Canyon, visitar o famoso letreiro de "Welcome to Fabulous Las Vegas", ou explorar a Fremont Street Experience, com seu teto de LED interativo. Para uma dose de adrenalina, suba ao topo da Stratosphere Tower, que tem as atrações mais radicais da cidade.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar Las Vegas é na primavera ou no outono, quando as temperaturas são mais amenas. Use sapatos confortáveis, pois você caminhará muito. Leve protetor solar e hidrate-se, já que o clima é muito seco. E, acima de tudo, divirta-se e aproveite a energia única de Vegas.</p>
        `, 
        categoryId: 5, 
        clicks: 150, 
        image: 'lasvegas.jpg', 
        detailImage: 'lasvegas2.jpg',
        date: '2024-03-28' 
    },
    { id: 5, 
        title: 'Cartagena: Cores, História e Sabor no Caribe Colombiano', 
        content: `
            <p>Cartagena das Índias é uma cidade mágica na costa caribenha da Colômbia. Com suas muralhas centenárias, arquitetura colonial colorida e uma energia contagiante, a cidade é uma imersão na história e na cultura caribenha. É um destino perfeito para quem busca beleza, história e diversão.</p>
            
            <h3>A Cidade Murada e o Castelo de San Felipe</h3>
            <p>O coração de Cartagena é a Cidade Murada (Ciudad Amurallada). Caminhe por suas ruas estreitas, admire as varandas floridas e explore as praças históricas. Não deixe de visitar o Castillo de San Felipe de Barajas, uma fortaleza imponente que defendia a cidade de piratas e invasores.</p>
            
            <h3>Ilhas e Praias Próximas</h3>
            <p>A pouca distância da costa, as Ilhas do Rosário são um paraíso tropical com águas cristalinas e recifes de corais. Você pode pegar um barco para passar o dia em uma das ilhas, mergulhar ou simplesmente relaxar. A praia de Playa Blanca, em Barú, é uma das mais famosas, com areias brancas e um mar de um azul vibrante.</p>
            
            <h3>Gastronomia e Música</h3>
            <p>A culinária de Cartagena é uma festa de sabores. Experimente o "ceviche" de frutos do mar frescos, as "arepas de huevo" (salgados fritos) e o peixe frito com "patacones" (banana-da-terra frita). À noite, a cidade se enche de música, com bares e clubes que tocam salsa, cumbia e reggaeton.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>O clima em Cartagena é quente e úmido o ano todo, então use roupas leves, protetor solar e chapéu. Andar a pé é a melhor forma de explorar a Cidade Murada, mas táxis e o aplicativo Uber são fáceis de usar. A melhor época para visitar é entre dezembro e abril, quando as chuvas são menos frequentes.</p>
        `, 
        categoryId: 7, 
        clicks: 300, 
        image: 'cartagena.jpg', 
        detailImage: 'cartagena2.jpg',
        date: '2025-12-11'},
    { id: 6, 
        title: 'Roteiro de 5 Dias em Londres', 
        content: `
            <p>Londres é uma cidade fascinante, rica em história, cultura e uma energia vibrante. Com um bom planejamento, é possível ver os principais pontos turísticos e ainda ter tempo para explorar os bairros charmosos. Este guia rápido te ajuda a montar seu roteiro.</p>
            
            <h3>Dia 1: Palácios e Parques Reais</h3>
            <p>Comece sua viagem pela área de Westminster. Visite o Palácio de Buckingham, o Big Ben e o Parlamento. À tarde, relaxe no St. James's Park e caminhe até a Trafalgar Square para ver a National Gallery.</p>
            
            <h3>Dia 2: Museus e Mercados</h3>
            <p>Dedique a manhã para o British Museum. À tarde, explore o Covent Garden com suas lojas e artistas de rua. Para o fim do dia, vá até o colorido Borough Market e experimente a culinária de rua.</p>
            
            <h3>Dia 3: A Vibe de East London</h3>
            <p>Siga para o leste e explore o bairro de Shoreditch, conhecido por sua arte de rua, lojas vintage e cafés modernos. Visite a Torre de Londres para um mergulho na história e tire uma foto na Tower Bridge.</p>
            
            <h3>Dia 4: Compras e Vistas Panorâmicas</h3>
            <p>Pela manhã, faça compras na Oxford Street e Regent Street. À tarde, suba na London Eye para uma vista panorâmica da cidade. Termine o dia com um cruzeiro pelo Rio Tâmisa, apreciando a paisagem iluminada.</p>
            
            <h3>Dia 5: O Charme de Notting Hill</h3>
            <p>Passe o seu último dia em Notting Hill, com suas casas coloridas e o famoso Portobello Road Market, perfeito para encontrar antiguidades. Se o tempo permitir, explore a área de South Kensington e visite o Victoria and Albert Museum.</p>
        `, 
        categoryId: 4, 
        clicks: 180, 
        image: 'londres.jpg', 
        detailImage: 'londres2.jpg',
         date: '2024-11-05' },
    {  id: 7, 
        title: 'Lisboa: Descobrindo a Capital Portuguesa', 
        content: `
            <p>Lisboa é uma cidade cheia de charme, história e beleza, construída sobre sete colinas. Com seus bairros antigos, bondes amarelos e uma culinária de dar água na boca, a capital portuguesa é uma ótima opção para uma viagem. Prepare-se para se apaixonar pela sua arquitetura e a sua atmosfera acolhedora.</p>
            
            <h3>Alfama e o Fado</h3>
            <p>Comece sua jornada em Alfama, o bairro mais antigo de Lisboa. Percorra suas ruelas estreitas, visite a Catedral da Sé e suba até o Castelo de São Jorge para uma vista panorâmica da cidade. À noite, reserve um jantar em um restaurante de Fado, onde você pode ouvir a música tradicional portuguesa que é Patrimônio da Humanidade.</p>
            
            <h3>Bonde 28 e a Baixa</h3>
            <p>Pegue o famoso Bonde 28 e faça um passeio pelos bairros históricos, passando por lugares como a Basílica da Estrela e a Praça Luís de Camões. Desça na Baixa, o centro comercial de Lisboa, e explore a Praça do Comércio e a Rua Augusta, com suas lojas e cafés.</p>
            
            <h3>Belém: História e Doçura</h3>
            <p>Visite o bairro de Belém para mergulhar na história das Grandes Navegações. Veja a Torre de Belém e o Mosteiro dos Jerónimos, ambos Patrimônios da UNESCO. E, claro, não vá embora sem provar o famoso Pastel de Belém original, uma das delícias mais famosas de Portugal.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor forma de explorar Lisboa é a pé, mas use sapatos confortáveis, pois as subidas podem ser cansativas. O metrô e os bondes são ótimos para se locomover. Experimente os sabores locais, como o bacalhau, o vinho do Porto e as sardinhas grelhadas. A melhor época para visitar é na primavera ou no outono, quando o clima é mais ameno.</p>
        `, 
        categoryId: 3, 
        clicks: 90, 
        image: 'lisboa.jpg', 
        detailImage: 'lisboa2.jpg',
        date: '2025-06-02'  },
    {  id: 8, 
        title: 'A Arte de Paris: Museus e Galerias', 
        content: `
            <p>Paris é a capital mundial da arte e da cultura. A cidade é um verdadeiro museu a céu aberto, mas é nos seus museus e galerias que a história da arte ganha vida. Para os amantes da arte, um roteiro pelos museus de Paris é uma experiência inesquecível.</p>
            
            <h3>O Louvre: A Joia da Coroa</h3>
            <p>Comece a sua jornada no Museu do Louvre, um dos maiores e mais famosos museus do mundo. Lar da Mona Lisa, da Vênus de Milo e de milhares de outras obras de arte, o Louvre exige um dia inteiro de exploração. Dica: compre os ingressos online para evitar longas filas.</p>
            
            <h3>Museu d'Orsay: O Templo do Impressionismo</h3>
            <p>Situado em uma antiga estação de trem, o Museu d'Orsay abriga a maior coleção de arte impressionista e pós-impressionista do mundo. Admire obras de Monet, Van Gogh, Degas e Renoir em um ambiente de arquitetura impressionante. É uma visita obrigatória para quem ama arte.</p>
            
            <h3>Centre Pompidou: Modernidade e Contraste</h3>
            <p>Para uma dose de arte moderna e contemporânea, visite o Centre Pompidou. O prédio, com sua arquitetura única e tubulações coloridas, é uma obra de arte por si só. A coleção inclui obras de Picasso, Kandinsky e Warhol, e a vista da cobertura é espetacular.</p>
            
            <h3>Dicas de Ouro para sua Viagem</h3>
            <p>Planeje suas visitas com antecedência e verifique os horários de funcionamento. Considere comprar um "Paris Museum Pass" se você planeja visitar vários museus. Lembre-se que muitos museus têm entrada gratuita no primeiro domingo de cada mês. Explore as pequenas galerias de arte no Marais e em Saint-Germain-des-Prés para descobrir artistas locais.</p>
        `, 
        categoryId: 4, 
        clicks: 210, 
        image: 'paris.jpg',
        detailImage: 'paris2.jpg',
       date: '2024-10-15'},
    {
        id: 9, 
        title: 'Costa Rica: Aventura e Natureza Pura Vida', 
        content: `
            <p>A Costa Rica é um paraíso de biodiversidade, onde a filosofia "Pura Vida" se reflete em cada canto. Com vulcões ativos, florestas tropicais exuberantes e praias paradisíacas, é o destino ideal para quem busca aventura, contato com a natureza e relaxamento.</p>
            
            <h3>Floresta Tropical e Vulcões</h3>
            <p>Explore os parques nacionais, como o famoso Parque Nacional Manuel Antonio, onde você pode observar macacos, preguiças e diversas aves em seu habitat natural. Não deixe de visitar o Vulcão Arenal, um dos mais ativos do país, e relaxe nas fontes termais ao seu redor.</p>
            
            <h3>Praias e Surfe</h3>
            <p>A Costa Rica é abençoada com duas costas distintas. No Pacífico, praias como Tamarindo e Santa Teresa são mundialmente famosas para o surfe, enquanto a costa caribenha, com suas á praias de areia escura, oferece uma cultura vibrante e um ritmo mais descontraído.</p>
            
            <h3>Aventuras e Ecoturismo</h3>
            <p>Para os amantes de aventura, a Costa Rica oferece tirolesa (zip-lining) por cima das copas das árvores, rafting em rios caudalosos e caminhadas por pontes suspensas que revelam paisagens incríveis. O ecoturismo é levado a sério, e você encontrará muitas opções de passeios que respeitam e promovem a conservação.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar a Costa Rica é durante a estação seca (de dezembro a abril). Use roupas leves, protetor solar, repelente e sapatos confortáveis para trilhas. Esteja preparado para chuvas rápidas mesmo na estação seca. Experimente a culinária local, como o "Gallo Pinto" (arroz e feijão) e os sucos de frutas frescas.</p>
        `, 
        categoryId: 6, 
        clicks: 240, 
        image: 'costarica.jpg', 
        detailImage: 'costarica2.jpg',
        date: '2025-09-17' 
    },
    {  id: 10, 
        title: 'Cozumel: Paraíso do Mergulho no Caribe Mexicano', 
        content: `
            <p>Cozumel é uma ilha paradisíaca no Caribe mexicano, mundialmente famosa por suas águas cristalinas, recifes de corais vibrantes e uma vida marinha espetacular. Se você é um amante do mergulho ou apenas quer relaxar em praias de areia branca, Cozumel é o destino perfeito.</p>
            
            <h3>Mergulho de Classe Mundial</h3>
            <p>Os recifes de Cozumel, que fazem parte do Sistema de Recifes Mesoamericano, são um dos maiores e mais saudáveis do mundo. Os pontos de mergulho como Palancar e Santa Rosa Wall oferecem visibilidade impressionante e uma grande diversidade de peixes tropicais, tartarugas e até mesmo tubarões-lixa. Há opções para todos os níveis, de iniciantes a mergulhadores experientes.</p>
            
            <h3>Aventuras Além da Água</h3>
            <p>Além do mergulho, a ilha oferece outras atividades. Alugue uma scooter ou um carro para explorar o lado leste da ilha, com suas praias selvagens e menos frequentadas. Visite o Parque Nacional Chankanaab para snorkel, nadar com golfinhos ou simplesmente relaxar em suas lagoas. Para os amantes de história, as ruínas maias de San Gervasio oferecem um vislumbre do passado da ilha.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar Cozumel é entre novembro e abril, quando o clima é seco e agradável. Lembre-se de beber bastante água e usar protetor solar biodegradável para proteger os recifes de corais. Experimente a culinária local, como os tacos de peixe frescos e os ceviches.</p>
        `, 
        categoryId: 7, 
        clicks: 175, 
        image: 'cozumel.jpg', 
        detailImage: 'cozumel2.jpg',
        date: '2025-04-14' 
    },
    {  id: 11, 
        title: 'Guia de Miami: Praias, Arte e Compras', 
        content: `
            <p>Miami é uma cidade com uma energia única, onde a cultura latina se mistura com o glamour americano. É o destino perfeito para quem busca sol, praias de areia branca, uma vida noturna agitada e compras de luxo. Este guia rápido te ajuda a explorar o melhor que Miami tem a oferecer.</p>
            
            <h3>Praias e Vida ao Ar Livre</h3>
            <p>Comece sua viagem em South Beach, a praia mais famosa de Miami, com suas águas calmas e o calçadão perfeito para uma caminhada. Não deixe de alugar uma bicicleta para explorar o bairro Art Deco em Ocean Drive. Para uma experiência mais tranquila, visite as praias de Key Biscayne ou Crandon Park.</p>
            
            <h3>Arte e Cultura</h3>
            <p>Miami é um polo de arte. Dedique uma tarde para explorar o Wynwood Walls, um museu a céu aberto com murais impressionantes de artistas de todo o mundo. Visite também o Design District para galerias de arte, arquitetura moderna e boutiques de grife.</p>
            
            <h3>Compras e Gastronomia</h3>
            <p>Miami é um paraíso para os compradores. As lojas de luxo em Bal Harbour Shops e Brickell City Centre são imperdíveis. Para uma experiência gastronômica completa, experimente a culinária cubana em Little Havana, com seus restaurantes familiares e o sabor autêntico de Cuba.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>O clima de Miami é quente o ano todo. Use roupas leves, protetor solar e chapéu. Considere alugar um carro para explorar a cidade e seus arredores, como os Everglades. A vida noturna é muito agitada, então prepare-se para as festas, mas lembre-se de sempre beber com moderação.</p>
        `, 
        categoryId: 2, 
        clicks: 110, 
        image: 'miami.jpg', 
        detailImage: 'miami2.jpg',
        date: '2025-08-20'
    },
    { id: 12, 
        title: 'Jamaica: Praias, Reggae e Aventura', 
        content: `
            <p>A Jamaica é uma ilha vibrante no Caribe, conhecida por suas praias de areia branca, música reggae contagiante e uma culinária de dar água na boca. Mais do que um destino de férias, a Jamaica oferece uma experiência cultural rica e paisagens de tirar o fôlego.</p>
            
            <h3>Praias e Cachoeiras</h3>
            <p>Relaxe nas areias de Seven Mile Beach em Negril, famosa por seus pores do sol deslumbrantes. Para uma aventura, visite as icônicas Dunn's River Falls, uma série de cachoeiras em cascata que você pode escalar. As lagoas azuis, como a Blue Lagoon em Port Antonio, oferecem águas tranquilas e misteriosas.</p>
            
            <h3>Música e Cultura</h3>
            <p>A Jamaica é o berço do reggae. Visite o Museu de Bob Marley em Kingston para mergulhar na história do lendário músico. A música está em todo lugar, de bares de praia a festas locais, e você pode sentir a energia do "Patois" (o dialeto local) e do ritmo da ilha.</p>
            
            <h3>Aventuras e Sabores</h3>
            <p>Para os aventureiros, explore o interior montanhoso da ilha, faça tirolesa ou pratique rafting em bambu. Não deixe de experimentar a culinária local, especialmente o "jerk chicken", o prato mais famoso da Jamaica, e os sucos de frutas frescas.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A melhor época para visitar a Jamaica é entre novembro e meados de dezembro, quando o clima é agradável e a ilha está menos lotada. Use roupas leves, protetor solar e repelente. Esteja aberto para interagir com os locais e se deixar levar pela vibração "Pura Vida" da ilha.</p>
        `, 
        categoryId: 2, 
        clicks: 280, 
        image: 'jamaica.jpg', 
        detailImage: 'jamaica2.jpg',
    date: '2025-05-12'  },
    { id: 13, 
        title: 'Guia Completo de Nova York para Iniciantes', 
        content: `
            <p>Nova York, a cidade que nunca dorme, é um destino que agrada a todos. Com seus arranha-céus icônicos, museus de classe mundial e uma energia inigualável, a cidade pode parecer intimidadora, mas com um bom roteiro, você vai se sentir em casa. Este guia é perfeito para a sua primeira visita.</p>
            
            <h3>Pontos Turísticos Clássicos</h3>
            <p>Comece a sua jornada em Manhattan. Passeie pela Times Square, o centro luminoso e vibrante da cidade, e suba ao Top of the Rock para uma vista espetacular do Empire State Building e do Central Park. Caminhe pela Ponte do Brooklyn e explore a Estátua da Liberdade e Ellis Island.</p>
            
            <h3>Parques e Museus</h3>
            <p>Passe uma tarde inteira explorando o Central Park, o pulmão verde da cidade, com suas trilhas e lagos. Em seguida, mergulhe na arte do Met (Metropolitan Museum of Art) ou no Guggenheim. Para os amantes de história, o American Museum of Natural History é uma ótima pedida.</p>
            
            <h3>Bairros e Gastronomia</h3>
            <p>Explore os bairros charmosos, como o boêmio Greenwich Village, o sofisticado SoHo para compras e Little Italy para uma refeição autêntica. A culinária em Nova York é um show à parte, com opções que vão desde os famosos "hot dogs" de rua até restaurantes com estrelas Michelin.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>Use o metrô, a forma mais eficiente de se locomover pela cidade. Use sapatos confortáveis, pois você vai caminhar muito. Se for viajar no inverno, prepare-se para o frio intenso. E, acima de tudo, prepare-se para se apaixonar pela energia da cidade.</p>
        `, 
        categoryId: 1, 
        clicks: 350, 
        image: 'novayork.jpg',
        detailImage: 'novayork2.jpg',
    date: '2024-01-17' },
    {  id: 14, 
        title: 'Costa Maya: Praias, Ruínas e Mergulho no Caribe Mexicano', 
        content: `
            <p>A Costa Maya, na península de Yucatán, México, é um tesouro escondido no Caribe. Com sua beleza natural intocada, praias tranquilas e uma rica história maia, é o destino perfeito para quem busca uma experiência autêntica e relaxante, longe das multidões.</p>
            
            <h3>Ruínas Maias de Chacchoben</h3>
            <p>A pouca distância do porto de Mahahual, as ruínas maias de Chacchoben oferecem um vislumbre do passado glorioso da civilização maia. Caminhe por trilhas tranquilas na floresta, enquanto explora as pirâmides e templos sagrados, e aprenda sobre a história e a cultura da região. O local é ideal para um passeio de meio dia.</p>
            
            <h3>Praias de Mahahual</h3>
            <p>Mahahual é a principal cidade da Costa Maya, com uma "orla" pitoresca e praias de areia branca. Relaxe nas espreguiçadeiras dos bares e restaurantes locais, ou alugue um caiaque para explorar a baía. A água calma e cristalina é perfeita para nadar e praticar snorkel.</p>
            
            <h3>Mergulho e Recifes de Coral</h3>
            <p>A Costa Maya é o lar de parte do Grande Recife Mesoamericano, o segundo maior do mundo. Mergulhadores e praticantes de snorkel podem explorar os recifes de coral vibrantes e encontrar tartarugas marinhas, raias e uma variedade de peixes tropicais. É uma experiência imperdível para os amantes da vida marinha.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>A Costa Maya é um destino de ecoturismo, então lembre-se de usar protetor solar biodegradável para proteger os recifes. Leve dinheiro em espécie, pois nem todos os estabelecimentos aceitam cartão. Esteja aberto para interagir com os locais e desfrutar do ritmo de vida tranquilo da região.</p>
        `, 
        categoryId: 7, 
        clicks: 190, 
        image: 'costamaya.jpg', 
        detailImage: 'costamaya2.jpg',
    date: '2025-08-10'  },
    {  id: 15, 
        title: 'Cruzeiro pelo Caribe: Uma Viagem em Alto Mar', 
        content: `
            <p>Em vez de escolher uma ilha, por que não visitar várias em uma única viagem? Um cruzeiro pelo Caribe oferece a chance de explorar múltiplos destinos, com a conveniência de ter sua acomodação, alimentação e entretenimento em um só lugar. É a combinação perfeita de relaxamento e aventura.</p>
            
            <h3>Benefícios de um Cruzeiro</h3>
            <p>Viajar de cruzeiro é ideal para quem busca praticidade. Você desfaz as malas apenas uma vez e acorda a cada dia em um novo porto. As companhias de cruzeiro oferecem uma vasta gama de atividades a bordo, de piscinas e spas a espetáculos teatrais e cassinos. É uma ótima opção para famílias, casais e viajantes solo.</p>
            
            <h3>Itinerários Populares</h3>
            <p>Os cruzeiros pelo Caribe são divididos em três rotas principais:
            <ul>
                <li><strong>Caribe Oriental:</strong> Geralmente inclui ilhas como St. Thomas, San Juan e as Ilhas Turks e Caicos, famosas por compras e praias.</li>
                <li><strong>Caribe Ocidental:</strong> Visita portos como Cozumel, Jamaica e Grand Cayman, ideais para mergulho e ecoturismo.</li>
                <li><strong>Caribe Sul:</strong> Explora ilhas menos visitadas, como Aruba, Curaçao e Barbados, com uma rica cultura e arquitetura.</li>
            </ul></p>
            
            <h3>Dicas de Viagem</h3>
            <p>Pesquise bem as companhias de cruzeiro, pois cada uma tem um estilo e público diferentes. Considere a época do ano, a alta temporada vai de dezembro a abril. Leve roupas leves e protetor solar, e não se esqueça de reservar passeios nos portos com antecedência para garantir seu lugar. O cruzeiro é uma experiência incrível para ver a beleza do Caribe de um ângulo totalmente novo.</p>
        `, 
        categoryId: 7, 
        clicks: 270, 
        image: 'caribe.jpg',
        detailImage: 'caribe2.jpg',
        date: '2025-07-01' 
    },
    { id: 16, 
        title: 'Panamá: Canal, Natureza e História', 
        content: `
            <p>O Panamá é muito mais do que seu famoso canal. É um país com uma rica história, florestas tropicais exuberantes e praias de tirar o fôlego. O Panamá é a ponte entre as Américas e um paraíso para quem busca aventura e cultura.</p>
            
            <h3>O Canal do Panamá</h3>
            <p>A principal atração do país é, sem dúvida, o Canal do Panamá. Visite as eclusas de Miraflores para ver de perto o espetáculo da engenharia que move o comércio mundial. É uma experiência fascinante e educativa para toda a família.</p>
            
            <h3>Cidade do Panamá e o Casco Viejo</h3>
            <p>A capital, Cidade do Panamá, é uma mistura de arranha-céus modernos e o charme colonial do Casco Viejo. Explore as ruas de pedra, admire a arquitetura histórica e aproveite a vibrante cena de bares e restaurantes. A vista da cidade a partir da orla é deslumbrante.</p>
            
            <h3>Natureza e Aventura</h3>
            <p>A natureza do Panamá é espetacular. Visite o Parque Nacional Soberanía para ver macacos, pássaros e outras espécies selvagens. As ilhas de San Blas, com sua beleza intocada e cultura indígena, são um paraíso para relaxar e nadar em águas cristalinas. É o lugar perfeito para desconectar do mundo.</p>
        `, 
        categoryId: 6, 
        clicks: 220, 
        image: 'panama.jpg',
        detailImage: 'panama2.jpg',
    date: '2025-05-27' },
    {  id: 17, 
        title: 'Vigo: Praias, Comida e Aventura na Galícia', 
        content: `
            <p>Vigo é uma cidade portuária na costa atlântica da Espanha, na região da Galícia. Famosa por sua culinária, suas praias e a sua localização privilegiada perto das Ilhas Cíes, Vigo é um destino perfeito para quem busca beleza natural, vida noturna e frutos do mar frescos.</p>
            
            <h3>A "Ostra" de Vigo</h3>
            <p>A culinária é uma das principais atrações de Vigo. Visite o Mercado de Pedra (Mercado da Pedra) para experimentar as famosas ostras frescas, um prato imperdível na cidade. A região é conhecida por seus frutos do mar e vinhos, então prepare-se para uma experiência gastronômica incrível.</p>
            
            <h3>Ilhas Cíes: O Caribe Espanhol</h3>
            <p>As Ilhas Cíes são um arquipélago de praias paradisíacas, com águas cristalinas e areia branca. A praia de Rodas é frequentemente eleita uma das mais bonitas do mundo. É o lugar perfeito para uma viagem de um dia, mas lembre-se de reservar a sua passagem com antecedência, pois o acesso é limitado.</p>
            
            <h3>Explorando a Cidade</h3>
            <p>A cidade de Vigo é perfeita para ser explorada a pé. Visite o bairro histórico, com suas ruas estreitas e arquitetura de pedra, e suba ao Monte do Castro para uma vista panorâmica do porto e da baía. A cidade também tem museus interessantes e galerias de arte que valem a pena a visita.</p>
        `, 
        categoryId: 3, 
        clicks: 160, 
        image: 'vigo.jpg',
        detailImage: 'vigo2.jpg',
    date: '2024-11-05'},
    { id: 18, 
        title: 'Ocean Cay MSC Marine Reserve: O Paraíso da MSC no Caribe', 
        content: `
            <p>A Ocean Cay MSC Marine Reserve é a ilha privada da MSC Cruzeiros nas Bahamas. Antes era um local de mineração de areia, agora foi transformada em um paraíso sustentável. Com praias de areia branca, águas cristalinas e atividades para toda a família, é o destino perfeito para um dia de relaxamento.</p>
            
            <h3>Praias e Mergulho</h3>
            <p>A ilha tem praias de tirar o fôlego, como a Ocean House Beach e a Bimini Beach. Você pode relaxar nas espreguiçadeiras, nadar em águas calmas e transparentes ou praticar snorkel nos recifes de coral que foram restaurados. A vida marinha é abundante, com peixes coloridos e tartarugas marinhas.</p>
            
            <h3>Atividades e Lazer</h3>
            <p>A Ocean Cay oferece atividades para todos os gostos. Você pode praticar paddleboarding, caiaque, fazer massagem na praia, ou simplesmente relaxar em uma cabana privada. A ilha também tem restaurantes e bares, então você não precisa se preocupar com nada. À noite, a ilha ganha uma nova vida, com um show de luzes no farol e festas na praia.</p>
            
            <h3>Sustentabilidade e Conservação</h3>
            <p>Um dos diferenciais da Ocean Cay é a sua abordagem sustentável. A MSC fez um grande esforço para restaurar a ilha e os seus recifes de coral, transformando-a em uma reserva marinha. A ilha tem uma série de iniciativas de conservação, então você pode relaxar sabendo que a sua visita ajuda a proteger o meio ambiente.</p>
        `, 
        categoryId: 7, 
        clicks: 295, 
        image: 'msc.jpg',
        detailImage: 'msc2.jpg',
    date: '2024-07-07' },
    {  id: 19, 
        title: 'Le Havre: Porta de Entrada da Normandia', 
        content: `
            <p>Le Havre é uma cidade portuária na costa da Normandia, França. Infelizmente, a cidade foi quase completamente destruída durante a Segunda Guerra Mundial, mas ressurgiu com uma arquitetura moderna e inovadora, projetada por Auguste Perret. Le Havre é uma cidade com uma identidade única, que combina sua história de destruição e reconstrução com uma vibrante cena artística e uma localização privilegiada na costa do Canal da Mancha.</p>
            
            <h3>Arquitetura Moderna e Patrimônio da UNESCO</h3>
            <p>O centro da cidade foi reconstruído em estilo moderno e é um Patrimônio Mundial da UNESCO. Caminhe pela Place de l\'Hôtel de Ville e admire os prédios de concreto, que foram projetados para serem funcionais e bonitos. Visite a Igreja de Saint-Joseph, com sua torre de 107 metros de altura e seus vitrais coloridos, uma verdadeira obra de arte do modernismo.</p>
            
            <h3>Arte e Museus</h3>
            <p>Le Havre é uma cidade com uma forte conexão com a arte. O Museu de Arte Moderna André Malraux (MuMa) tem uma das maiores coleções de arte impressionista na França, com obras de Monet, Renoir e Degas. Caminhe pela orla e admire a vista para o mar, que inspirou muitos artistas. A cidade é um ótimo lugar para quem busca uma experiência cultural diferente, longe das multidões de Paris.</p>
            
            <h3>Dicas de Viagem</h3>
            <p>Le Havre é facilmente acessível de trem a partir de Paris, e é um excelente ponto de partida para explorar a região da Normandia. Alugue um carro para visitar praias famosas, como Étretat e suas falésias. A melhor época para visitar é na primavera ou no verão, quando o clima é mais agradável. Leve um casaco leve, pois o vento pode ser forte na costa.</p>
        `, 
        categoryId: 3, 
        clicks: 185, 
        image: 'lehavre.jpg',
        detailImage: 'lehavre2.jpg',
    date: '2025-02-26'},
    {id: 20, 
        title: 'Guia de Segurança para Viagem Solo Feminina', 
        content: `
            <p>Viajar sozinha é uma experiência empoderadora e transformadora, cheia de liberdade e autoconhecimento. No entanto, para aproveitar ao máximo, a segurança deve ser sua prioridade. Este guia oferece dicas essenciais para que você possa se aventurar pelo mundo com confiança e tranquilidade.</p>
            
            <h3>Antes da Viagem: Pesquisa e Planejamento</h3>
            <ul>
                <li><strong>Pesquise o destino:</strong> Verifique a reputação de segurança do país ou cidade. Leia relatos de outras viajantes solo e pesquise sobre as normas culturais locais, especialmente em relação ao vestuário e comportamento.</li>
                <li><strong>Compartilhe seu itinerário:</strong> Deixe uma cópia do seu roteiro, incluindo horários de voos e informações de hotéis, com um amigo ou familiar de confiança.</li>
                <li><strong>Kit de segurança:</strong> Tenha um pequeno kit com medicamentos, um alarme de segurança pessoal e um carregador portátil para o celular.</li>
            </ul>
            
            <h3>Durante a Viagem: Dicas Práticas</h3>
            <ul>
                <li><strong>Confiança é a chave:</strong> Ande com confiança, como se você soubesse para onde está indo, mesmo que não saiba. Se precisar, use o celular em um local discreto ou entre em uma loja para checar o mapa.</li>
                <li><strong>Hospedagem segura:</strong> Opte por hotéis ou hostels com boas avaliações de segurança. Se estiver em um hostel, escolha quartos exclusivos para mulheres, se disponíveis.</li>
                <li><strong>Dinheiro e documentos:</strong> Leve apenas o necessário e mantenha o restante em um cofre. Faça cópias digitais dos seus documentos e guarde-as na nuvem. Use doleiras ou cintos de dinheiro para manter valores importantes seguros sob a roupa.</li>
                <li><strong>Vida noturna:</strong> Se for sair à noite, use aplicativos de transporte confiáveis. Não aceite bebidas de estranhos e sempre fique atenta ao seu redor.</li>
            </ul>
            
            <h3>Interagindo com os Locais</h3>
            <p>Interagir com os locais é uma das melhores partes de viajar. Seja amigável, mas mantenha-se vigilante. Confie na sua intuição: se algo ou alguém parecer suspeito, afaste-se da situação. Viajar solo não significa estar sozinha, mas ter o controle e a liberdade de seguir seu próprio caminho, com segurança e inteligência.</p>
        `, 
        categoryId: 5, 
        clicks: 205, 
        image: 'feminino.jpg',
        detailImage: 'feminino2.jpg',
    date: '2024-21-05' },
         {
        id: 21,
        title: 'Buenos Aires: Tango, História e Charme Argentino',
        content: `
            <p>Buenos Aires, a capital da Argentina, é uma cidade vibrante e apaixonante. Conhecida como a "Paris da América do Sul", ela combina a elegância europeia com uma cultura latina intensa. Prepare-se para se encantar com sua arquitetura, sua gastronomia e a paixão do tango.</p>

            <h3>Bairros para Explorar</h3>
            <p>Comece sua jornada em Palermo, o bairro mais verde da cidade, com seus parques, boutiques e restaurantes modernos. Visite o colorido Caminito, em La Boca, para ver a arte de rua e a história do tango. Para a elegância, explore a Recoleta, com seus cafés charmosos e o famoso cemitério onde está o túmulo de Evita Perón.</p>

            <h3>Tango e Gastronomia</h3>
            <p>Não se pode ir a Buenos Aires sem vivenciar o tango. Assista a um show em um dos teatros da cidade, ou veja a paixão dos dançarinos em uma milonga local. Para comer, experimente a famosa "carne argentina" em uma "parrilla" tradicional, e acompanhe com um bom vinho Malbec. Os "alfajores" e o sorvete de doce de leite são imperdíveis.</p>
        `,
        categoryId: 3,
        clicks: 145,
        image: 'buenosaires.jpg',
        detailImage: 'buenosaires2.jpg',
        date: '2025-05-13'
    },
     {
        id: 22,
        title: 'Punta del Este: O Balneário Mais Famoso do Uruguai',
        content: `
            <p>Punta del Este é o balneário mais famoso da América do Sul, com uma mistura de glamour, belas praias e uma vida noturna agitada. A cidade é a escolha perfeita para quem busca sol, mar e diversão. Prepare-se para dias de sol na praia e noites de festa.</p>
            
            <h3>Praias e Arte</h3>
            <p>A cidade é dividida entre duas costas. A Playa Mansa, com suas águas calmas e tranquilas, é ideal para famílias e para assistir ao pôr do sol. A Playa Brava, com suas ondas mais fortes, é perfeita para o surfe. Não deixe de visitar a famosa escultura "La Mano" (A Mão), um dos símbolos da cidade. E a CasaPueblo, a obra de arte de Carlos Páez Vilaró, que é um museu e hotel com uma vista espetacular.</p>
            
            <h3>Vida Noturna e Gastronomia</h3>
            <p>Punta del Este é famosa por sua vida noturna, com clubes e bares que ficam abertos até o amanhecer. A cidade tem uma grande variedade de restaurantes, que servem desde frutos do mar frescos até a deliciosa carne uruguaia. Para uma experiência mais autêntica, experimente o "chivito", o sanduíche tradicional do Uruguai.</p>
        `,
        categoryId: 1,
        clicks: 115,
        image: 'punta.jpg',
        detailImage: 'punta2.jpg',
        date: '2024-09-22'
    },
     {
        id: 23,
        title: 'Guia de Mala: Como Viajar de Forma Inteligente',
        content: `
            <p>Fazer as malas é uma arte, e fazer isso de forma inteligente pode transformar a sua viagem. Este guia de mala oferece dicas práticas para você economizar espaço, evitar excesso de bagagem e ter tudo o que precisa para a sua aventura, sem estresse.</p>
            
            <h3>O Essencial: Menos é Mais</h3>
            <p>A regra de ouro é: "menos é mais". Faça uma lista do que você realmente precisa, e evite levar itens desnecessários. Escolha roupas versáteis que podem ser combinadas e usadas em diferentes ocasiões. Prefira calçados confortáveis para as caminhadas e use os mais volumosos durante o voo.</p>
            
            <h3>Técnicas de Organização</h3>
            <p>Use organizadores de mala e cubos de compressão para economizar espaço. Role suas roupas em vez de dobrá-las. Coloque as roupas mais pesadas no fundo da mala. Aproveite os espaços vazios, como o interior dos sapatos, para guardar meias e cintos. Para líquidos, use frascos menores e embalagens a vácuo para evitar vazamentos.</p>
            
            <h3>Checklist de Ouro</h3>
            <p>Tenha sempre um kit de primeiros socorros, um adaptador de tomada universal e uma cópia digital de todos os seus documentos importantes. Para a sua bagagem de mão, tenha um kit com o essencial: passaporte, carteira, carregador portátil, uma troca de roupa e os remédios que você usa no dia a dia. Chegue ao aeroporto com antecedência, e a sua viagem será muito mais tranquila.</p>
        `,
        categoryId: 5,
        clicks: 310,
        image: 'mala.jpg',
        detailImage: 'mala2.jpg',
        date: '2024-10-20'
    },
        {
        id: 24,
        title: 'Guia de Saúde do Viajante: Viaje com Segurança',
        content: `
            <p>A saúde é um dos aspectos mais importantes de qualquer viagem. Um bom planejamento pode evitar problemas de saúde e garantir que sua aventura seja tão boa quanto você imaginou. Este guia oferece dicas essenciais para que você possa viajar com segurança e tranquilidade.</p>
            
            <h3>Antes da Viagem: Vacinas e Consultas</h3>
            <p>Consulte um médico antes da sua viagem para verificar se você precisa de vacinas ou medicamentos específicos para o seu destino. Verifique os requisitos de entrada do país que você vai visitar em relação a vacinas. Tenha uma lista dos seus medicamentos de uso contínuo, incluindo a receita, para evitar problemas na alfândega.</p>
            
            <h3>Durante a Viagem: Primeiros Socorros</h3>
            <p>Tenha um kit de primeiros socorros com o essencial: analgésicos, curativos, antissépticos, anti-histamínicos e remédios para enjoo e diarreia. Beba bastante água engarrafada para evitar problemas. Lave as mãos frequentemente, e tenha sempre álcool em gel por perto. E, acima de tudo, proteja-se do sol com protetor solar e chapéu, e use repelente para evitar picadas de insetos.</p>
            
            <h3>Seguro Viagem: O Essencial</h3>
            <p>Um seguro viagem é um investimento essencial para a sua tranquilidade. Ele pode cobrir despesas médicas, perda de bagagem e cancelamento de voos. Leia o contrato com atenção para entender o que está incluído. Um seguro pode salvar você de despesas altas e inesperadas, e é um item que não pode faltar na sua viagem.</p>
        `,
        categoryId: 5,
        clicks: 190,
        image: 'saude.jpg',
        detailImage: 'saude2.jpg',
        date: '2025-01-01'
    }

];
let nextPostId = 25;

// Rota de Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@email.com' && password === 'senha123') {
        res.status(200).json({ message: 'Login bem-sucedido!', token: 'um-token-de-exemplo' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas.' });
    }
});

// Rotas para Gerenciamento de Categorias
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

app.post('/api/categories', (req, res) => {
    const newCategory = {
        id: nextCategoryId++,
        name: req.body.name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});

app.put('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === categoryId);
    if (categoryIndex > -1) {
        categories[categoryIndex].name = req.body.name;
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).send('Categoria não encontrada.');
    }
});

app.delete('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(c => c.id !== categoryId);
    res.status(204).send();
});

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

app.get('/api/posts', (req, res) => {
    const categoryId = req.query.categoryId;
    const searchTerm = req.query.q ? req.query.q.toLowerCase() : '';

    let filteredPosts = [...posts];

    if (categoryId) {
        filteredPosts = filteredPosts.filter(p => p.categoryId === parseInt(categoryId));
    }

 if (searchTerm) {
        const normalizedSearchTerm = normalizeString(searchTerm);
        filteredPosts = filteredPosts.filter(post => 
            normalizeString(post.title).includes(normalizedSearchTerm) ||
            normalizeString(post.content).includes(normalizedSearchTerm)
        );
    }

    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json(filteredPosts);
});

app.post('/api/posts', (req, res) => {
    const newPost = {
        id: nextPostId++,
        title: req.body.title,
        content: req.body.content,
        clicks: 0
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex > -1) {
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
        res.json(posts[postIndex]);
    } else {
        res.status(404).send('Postagem não encontrada.');
    }
});

app.delete('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(p => p.id !== postId);
    res.status(204).send();
});

// Rota para buscar um post por ID (NOVA ROTA)
app.get('/api/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Postagem não encontrada.');
    }
});

// Rota de Estatísticas
app.get('/api/statistics', (req, res) => {
    const stats = posts.map(post => ({
        title: post.title,
        clicks: post.clicks
    }));
    res.json(stats);
});

// Rota para registrar o clique em um post
app.post('/api/posts/click/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (post) {
        post.clicks += 1; // Incrementa o contador de cliques
        res.status(200).json({ clicks: post.clicks });
        console.log(`Cliques do post ${post.title} atualizados para ${post.clicks}`);
    } else {
        res.status(404).send('Postagem não encontrada.');
    }
});

// Rota para buscar um post por ID (NOVA ROTA)
app.get('/api/posts/:id', (req, res) => {
    
});

//

app.listen(PORT, () => {
    console.log(`🚀 Backend rodando na porta ${PORT}`);
});
