import Column from './components/Column';
import List from './components/List';
import useFoodList from './hooks/useFoodList';

function App() {
  const { foodItems, selectedFoods, handleFoodSelection, handleRemoveFood } =
    useFoodList();

  return (
    <>
      <main className='container mx-auto  grid grid-cols-3 gap-1 h-screen p-4 '>
        <List dataList={foodItems} onSelect={handleFoodSelection} />
        <Column
          label='Fruits'
          selectedList={selectedFoods}
          type='Fruit'
          onRemove={handleRemoveFood}
        />
        <Column
          label='Vegetables'
          selectedList={selectedFoods}
          type='Vegetable'
          onRemove={handleRemoveFood}
        />
      </main>
    </>
  );
}

export default App;
