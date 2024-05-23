import React, {Suspense} from 'react'
import DataFetcher from './DataFetcher'

const DataFetchWrapper = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <DataFetcher/>
      </Suspense>
    </div>
  )
}

export default DataFetchWrapper
