import {useSelector} from "react-redux";

const ScoreTable = () => {
  const results = useSelector(state => state.words.results)

  const resultBlock = results.map((result, index) =>
    <div className="text-block mt-3 " key={index}>
      <div className="container p-0">
        <div className="row">
          <h4 className="col-md-3 col-12">{result.name}</h4>
          <div className="col-md-4 col-sm-6 col-12">Точность: {result.accuracy}%</div>
          <div className="col-md-5 col-sm-6 col-12">Скорость: {result.spm} зн/мин.</div>
        </div>
      </div>
    </div>)

  if(results.length)
    return (
      <div className="mt-5">
        <h3>Результаты:</h3>
        {resultBlock}
      </div>
    )
  else return (
    <div className="mt-5">
      <h3>Нет результатов! Будьте первыми!</h3>
    </div>
  )
}

export default ScoreTable
