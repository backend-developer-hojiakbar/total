import React, { useState, useEffect, useCallback } from 'react';

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (onChange) onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="relative w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => setMinVal(Math.min(Number(e.target.value), maxVal - 1))}
        className="absolute pointer-events-none appearance-none h-2 w-full bg-gray-300"
        style={{ zIndex: minVal > max - 100 ? '5' : '3' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => setMaxVal(Math.max(Number(e.target.value), minVal + 1))}
        className="absolute pointer-events-none appearance-none h-2 w-full bg-gray-300"
        style={{ zIndex: maxVal < min + 100 ? '4' : '2' }}
      />

      <div className="relative w-full">
        <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded"></div>
        <div
          className="absolute h-2 bg-blue-500 rounded"
          style={{
            left: `${getPercent(minVal)}%`,
            right: `${100 - getPercent(maxVal)}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
