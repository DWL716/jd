import React, {memo} from 'react';

interface IProps {

}

const NotFound: React.FC<IProps> = (props) => {

  return (
    <div>
      哎呀， 你要的页面丢失啦。
    </div>
  );
};

export default memo(NotFound);