import { SparklineComponent, Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
    <SparklineComponent id={id} height={height} width={width} lineWidth={1} valueType="Numeric" fill={color} border={{color:currentColor,width:2}}
    xName='xval'
    yName='yval'
    type={type}
    dataSource={data}
    tooltipSettings={{
      visible: true,
      // eslint-disable-next-line no-template-curly-in-string
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible: true,
      },
    }}
    markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
    >
<Inject services={[SparklineTooltip]}/>
      </SparklineComponent>
  )
}

export default SparkLine