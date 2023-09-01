import { message, notification, Modal } from 'ant-design-vue';
import { createVNode } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';



type Message = Omit<typeof message, 'useMessage'>
type Notification = Omit<typeof notification, 'useNotification'>
type ModalIntl = Pick<typeof Modal, 'info' | 'success' | 'error' | 'warning' | 'confirm'>

export function useMessage() {
    return message as Message
}
export function useNotification() {
    return notification as Notification
}

let modal = Modal as ModalIntl;

function createConfirmModal(yesCallback: Fn, title: string = '删除确认', subTitle: string = '删除后不可恢复，是否确认删除？') {
    return modal.confirm({
        title,
        icon: createVNode(ExclamationCircleOutlined),
        content: subTitle,
        okText: '确认',
        cancelText: '取消',
        onOk: yesCallback,
        class: 'global-message-confirm',
        closable: true,
        width: '480px',
    })
}
export function useModal() {
    return {
        confirm: createConfirmModal
        //TODO其他弹层的逻辑
    }
}
