import { useRef, useEffect, useState } from 'react';

function useMultiRangeSlider(options = {}) {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      const instance = new RangeSlider(sliderRef.current, options);
      setSliderInstance(instance);
    }

    return () => {
      if (sliderInstance) {
        sliderInstance.destroy();
      }
    };
  }, [sliderRef.current, options]);

  const setValue = (values) => {
    if (sliderInstance) {
      sliderInstance.setValue(values);
    }
  };

  const getValue = () => {
    if (sliderInstance) {
      return sliderInstance.getValue();
    }
    return null;
  };

  const onChange = (callback) => {
    if (sliderInstance) {
      sliderInstance.on('change', callback);
    }
  };

  return { sliderRef, setValue, getValue, onChange };
}

export default useMultiRangeSlider;
