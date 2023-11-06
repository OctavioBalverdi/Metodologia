import React, { useState } from 'react';
import { Button, ConfigProvider, Drawer, Space } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import {WechatOutlined} from "@ant-design/icons"
import CommentBox from '../ComentBox/comentBox';
const useStyle = createStyles(({ token }) => ({
  'my-drawer-body': {
    background: token['blue-1'],
  },
  'my-drawer-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-drawer-header': {
    background: token.green1,
  },
  'my-drawer-footer': {
    color: token.colorPrimary,
  },
  'my-drawer-content': {
    borderLeft: '2px dotted #333',
  },
}));
const Viewer = () => {
  const [open, setOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles['my-drawer-body'],
    mask: styles['my-drawer-mask'],
    header: styles['my-drawer-header'],
    footer: styles['my-drawer-footer'],
    content: styles['my-drawer-content'],
  };
  const drawerStyles = {
    mask: {
      backdropFilter: 'blur(10px)',
    },
    content: {
      boxShadow: '-10px 0 10px #666',
    },
    header: {
      borderBottom: `1px solid ${token.colorPrimary}`,
    },
    body: {
      fontSize: token.fontSizeLG,
    },
    footer: {
      borderTop: `1px solid ${token.colorBorder}`,
    },
  };
  return (
    <>
      <Space>
        <Button style={{width:"50px", height:"30px"}} onClick={() => toggleDrawer(0, true)}>
        <WechatOutlined />
        </Button>
      </Space>
      <Drawer
        title="Comentarios"
        placement="right"
        onClose={() => toggleDrawer(0, false)}
        open={open[0]}
        classNames={classNames}
        styles={drawerStyles}
      >
        <div>
          <CommentBox/>
        </div>
      </Drawer>
      
    </>
  );
};
export default Viewer;