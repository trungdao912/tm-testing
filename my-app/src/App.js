import Menu from './components/Menu';
import './App.css';

const mockData = [
  {
    title: 'Menu 1',
    children: [
      {
        title: 'Menu 1 - Sub1',
        children: [
          {
            title: 'Menu 1 - sub1 -sub1',
          },
          {
            title: 'Menu 1 - sub1 -sub2',
          },
        ],
      },
      {
        title: 'Menu 1 - Sub2',
      },
      {
        title: 'Menu 1 - Sub3',
      },
    ],
  },
  {
    title: 'Menu 2',
    children: [
      {
        title: 'Menu 1 - Sub1',
      },
      {
        title: 'Menu 1 - Sub2',
      },
      {
        title: 'Menu 1 - Sub3',
      },
    ],
  },
  {
    title: 'Menu 3',
    children: [
      {
        title: 'Menu 1 - Sub1',
      },
      {
        title: 'Menu 1 - Sub2',
      },
      {
        title: 'Menu 1 - Sub3',
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Menu data={mockData} />
    </div>
  );
}

export default App;
