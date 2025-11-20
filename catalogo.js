let selectedCurrency = 'usd'; // Por defecto dólares

// Si quieres persistencia entre recargas:
/*
if (localStorage.getItem('selectedCurrency')) {
  selectedCurrency = localStorage.getItem('selectedCurrency');
}
*/
// Products data - 20 products
const products = [
  
  
  
  // Product name, price (yellow), image URL, info text, isInStock (true/false)
  {
    name: "Netflix",
    price: 4.36,
    image: "https://www.dropbox.com/scl/fi/40l8yl8877trmu1bat05l/Netflix-1.webp?rlkey=y16li0mxd474stvv4j6o2dqby&st=j4yu7bro&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 101,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "CapCut Pro",
    price: 2.60,
    image: "https://www.dropbox.com/scl/fi/2pw4t4u4x7fji6jum6kgw/images-1.jpeg?rlkey=h07l7rrn6v5kwgutm4vuus5xt&st=9kjyjqii&dl=1",
    info: "✓ PC - CEL - 1 Mes",
    info1: "✓ 3 dispositivos",
    renewal: 102,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Spotify",
    price: 3.51,
    image: "https://www.dropbox.com/scl/fi/xpsms24l108r733sigpkx/14152352518386.jpg?rlkey=4r1jhuya4lji74vryhwt3ku5z&st=rp5gugdq&dl=1",
    info: "✓  Garantía  - 1 Mes",
    info1: "✓ Correo",
    renewal: 103,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "HBO Max Standard",
    price: 1.30,
    image: "https://www.dropbox.com/scl/fi/t249hr6uiyk6smfxntz5i/690582.jpeg?rlkey=fzg0q9bjta0nslzi48ygilmaj&st=9u6b2vrs&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 104,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  // Add 16 more products with similar structure
  {
    name: "Netflix",
    price: 3.34,
    image: "https://www.dropbox.com/scl/fi/8n3xv0dpf0pkzanr1qq7b/Netflix.jpg?rlkey=dxesyzt0l53frwiwbycml3w68&st=5p0vjzw4&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 201,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 0
  },
  {
    name: "Disney+",
    price: 2.00,
    image: "https://www.dropbox.com/scl/fi/vvz5xltdefldyidu3akba/Disney.webp?rlkey=g8xnh48ipq1d1c6b83upfvjg9&st=d76kjfa4&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 105,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "YouTube Premium",
    price: 1.95,
    image: "https://www.dropbox.com/scl/fi/duh5zx5fz6dm110t0tsz0/image-15.png?rlkey=im3lwj6kmnb1g91pn8cdnzjfm&st=nv6o2zx0&dl=1",
    info: "✓ 1 Mes",
    info1: "✓ Correo",
    renewal: 106,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Crunchyroll",
    price: 1,
    image: "https://www.dropbox.com/scl/fi/z7h7u0w0k63oqgmteckxv/untitled-design-30.png?rlkey=wg99fqyc53cwenloa97j1egvd&st=v4yzq62h&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 107,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "HBO MAX Platino",
    price: 1.82,
    image: "https://www.dropbox.com/scl/fi/t249hr6uiyk6smfxntz5i/690582.jpeg?rlkey=fzg0q9bjta0nslzi48ygilmaj&st=9u6b2vrs&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 108,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "MICROSOFT 365",
    price: 7.80,
    image: "https://www.dropbox.com/scl/fi/l6n706t26gfgtu8a99u5k/17625556819573942463992156953746.jpg?rlkey=xpihhrk8iecyoquft4bqplc0k&st=7ti0u26k&dl=1",
    info: "✓ 1 año",
    info1: "✓ 15 dispositivos",
    renewal: 109,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Spotify",
    price: 2.83,
    image: "https://www.dropbox.com/scl/fi/xpsms24l108r733sigpkx/14152352518386.jpg?rlkey=4r1jhuya4lji74vryhwt3ku5z&st=rp5gugdq&dl=1",
    info: "✓  1 Mes",
    info1: "✓ correo",
    renewal: 202,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "CapCut Pro",
    price: 6.50,
    image: "https://www.dropbox.com/scl/fi/2pw4t4u4x7fji6jum6kgw/images-1.jpeg?rlkey=h07l7rrn6v5kwgutm4vuus5xt&st=9kjyjqii&dl=1",
    info: "✓ PC - CEL - 3 Mes",
    info1: "✓ 3 dispositivos",
    renewal: 110,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Crunchyroll",
    price: 3.67,
    image: "https://www.dropbox.com/scl/fi/z7h7u0w0k63oqgmteckxv/untitled-design-30.png?rlkey=wg99fqyc53cwenloa97j1egvd&st=v4yzq62h&dl=1",
    info: "✓  Cuenta completa",
    info1: "",
    renewal: 111,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 0
  },
  {
    name: "Vix",
    price: 1,
    image: "https://www.dropbox.com/scl/fi/t59awss2h8cwevan5x98o/678552.jpeg?rlkey=kb9onxyyr5k416v5e2rrjqku0&st=iwql448j&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 112,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Chat GPT",
    price: 3.51,
    image: "https://www.dropbox.com/scl/fi/q10zpdyw1slcbp8wlw2oz/Destaque-ChatGPT-1024x576.jpg?rlkey=ksnckwvbfgg4hrlhgv6ekk0yb&st=cxx68gtu&dl=1",
    info: "✓ Cuenta compartida - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 113,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Gemini",
    price: 3.90,
    image: "https://www.dropbox.com/scl/fi/c6avg9fai3rm8u0ejozoh/Gemini-August-Release_SS.width-1300.jpg?rlkey=8yjpch8kc0uyinarmxhd3b00x&st=mgzmdn5z&dl=1",
    info: "✓ 1 Mes",
    info1: "✓ 2TB De almacenamiento",
    renewal: 114,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Paramount",
    price: 1.22,
    image: "https://www.dropbox.com/scl/fi/383fz4uh6ufmy3jhmvofy/paramount-plus.png?rlkey=6qg9wbwjasfl15mphgytz3c8b&st=mintk4s6&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 115,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Prime Video",
    price: 2.24,
    image: "https://www.dropbox.com/scl/fi/3kvv0x4f4v02c04bmxjqu/primevideo-seo-logo.png?rlkey=q9lrm9et68ki5dt0aooqr6suk&st=8qbx6uk1&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 116,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Canva",
    price: 1.30,
    image: "https://www.dropbox.com/scl/fi/ygial8c0y09cstwk3ukhk/images.jpeg?rlkey=bkv9n0jubirk03yxquyew8zbi&st=pl6j92cq&dl=1",
    info: "✓ 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 117,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
    name: "Disney",
    price: 1.30,
    image: "https://www.dropbox.com/scl/fi/xqft1n1malmcekduny4ff/image002_8_d067e0e0.jpeg?rlkey=m41sc49hvprmjnixiq5ke1u7c&st=2oovzqvf&dl=1",
    info: "✓ 1 Perfil - 1 Mes",
    info1: "✓ 1 dispositivo",
    renewal: 203,
    bandera: "🇧🇴🇧🇷🇺🇸+",
    stock: 1
  },
  {
  name: "Netflix",
  price: 15.82,
  image: "https://www.dropbox.com/scl/fi/fkodmn9nr6aleqxyl82ut/Netflix_completo.jpg?rlkey=25bb80i6knxsemdngu1ia75ww&st=at9fmqx3&dl=1",
  info: "✓ Cuenta completa ",
  info1: "✓ 5 perfiles",
  renewal: 204,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 1
},
  {
  name: "Crunchyroll",
  price: 0.97,
  image: "https://www.dropbox.com/scl/fi/z7h7u0w0k63oqgmteckxv/untitled-design-30.png?rlkey=wg99fqyc53cwenloa97j1egvd&st=v4yzq62h&dl=1",
  info: "✓ 1 Perfil - ✓ 1 Mes ",
  info1: "✓ 1 dispositivo",
  renewal: 205,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 1
},
{
  name: "YouTube premium",
  price: 1.30,
  image: "https://www.dropbox.com/scl/fi/duh5zx5fz6dm110t0tsz0/image-15.png?rlkey=im3lwj6kmnb1g91pn8cdnzjfm&st=nv6o2zx0&dl=1",
  info: "✓ 1 Mes ",
  info1: "✓ 1 dispositivo",
  renewal: 206,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 1
},
{
  name: "Canva",
  price: 1.75,
  image: "https://www.dropbox.com/scl/fi/ygial8c0y09cstwk3ukhk/images.jpeg?rlkey=bkv9n0jubirk03yxquyew8zbi&st=pl6j92cq&dl=1",
  info: "✓ 12 Meses",
  info1: "✓ 1 dispositivo",
  renewal: 207,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 1
},
{
  name: "Netflix",
  price: 2.08,
  image: "https://www.dropbox.com/scl/fi/8n3xv0dpf0pkzanr1qq7b/Netflix.jpg?rlkey=dxesyzt0l53frwiwbycml3w68&st=5p0vjzw4&dl=1",
  info: "✓ 1 Perfil - 7 dias",
  info1: "✓ 1 dispositivo",
  renewal: 208,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 0
},
{
  name: "Prime Video",
  price: 1.30,
  image: "https://www.dropbox.com/scl/fi/3kvv0x4f4v02c04bmxjqu/primevideo-seo-logo.png?rlkey=q9lrm9et68ki5dt0aooqr6suk&st=8qbx6uk1&dl=1",
  info: "✓ 1 Perfil - 1 Mes",
  info1: "✓ 1 dispositivo",
  renewal: 209,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 1
},
{
  name: "Paramount",
  price: 1.22,
  image: "https://www.dropbox.com/scl/fi/383fz4uh6ufmy3jhmvofy/paramount-plus.png?rlkey=6qg9wbwjasfl15mphgytz3c8b&st=mintk4s6&dl=1",
  info: "✓ Cuenta completa",
  info1: "",
  renewal: 210,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 0
},
{
  name: "Universal",
  price: 1.57,
  image: "https://www.dropbox.com/scl/fi/wktv6edysb4t7h79o5hxo/universal-pictures.jpg?rlkey=m677gy9abti525kkujjch5jc0&st=ga7hrsys&dl=1",
  info: "✓ 1 Perfil - ✓ 1 Mes",
  info1: "✓ 1 dispositivo",
  renewal: 211,
  bandera: "🇧🇴🇧🇷🇺🇸+",
  stock: 0
},
];