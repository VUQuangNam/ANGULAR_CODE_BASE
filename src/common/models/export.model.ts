// export enum ExportStatuses {
//     PENDING = 'pending',
//     DELIVERY = 'delivery',
//     CANCELLED = 'cancelled',
//     CONFIRMED = 'confirmed'
// }

// export enum ExportTypes {
//     TRANSFER = 1,
//     EXPORT = 2
// }

// export enum ExportNormalStatuses {
//     PENDING = 'Chờ duyệt phiếu',
//     DELIVERY = 'Đang vận chuyển',
//     CONFIRMED = 'Đã hoàn thành',
//     CANCELLED = 'Đã hủy phiếu'
// }

export class Export {
    id!: string;
    type!: number;
    note!: string;
    reason!: string;

    constructor(state?: Export) {
        if (state) {
            if (state.id) this.id = state.id;
            if (state.type) this.type = state.type;
            if (state.note) this.note = state.note;
            if (state.reason) this.reason = state.reason;
        }
    }

    /**
     * Get table collums
     * @public
     */
    public get collums(): Array<any> {
        return [
            {
                id: 'id',
                name: 'Mã đơn',
                width: 100,
                active: true,
                type: 'link',
                to: 'inventory/exports'
            },
            {
                id: 'created_by',
                name: 'Người tạo',
                width: 200,
                active: true,
                type: 'object',
                index: 'name'
            },
            {
                id: 'source',
                name: 'Từ chi nhánh',
                width: 200,
                active: true,
                type: 'object',
                index: 'name'
            },
            {
                id: 'store',
                name: 'Đến chi nhánh',
                width: 200,
                active: true,
                type: 'object',
                index: 'name'
            },
            {
                id: 'created_at',
                name: 'Ngày chuyển',
                width: 200,
                active: true,
                type: 'text'
            },
            {
                id: 'received_at',
                name: 'Ngày nhận',
                width: 200,
                active: true,
                type: 'text'
            },
            {
                id: 'status_name',
                name: 'Trạng thái',
                width: 200,
                active: true,
                type: 'text'
            },
            {
                id: 'total_quantity',
                name: 'Số lượng',
                width: 100,
                active: false,
                type: 'text'
            },
            {
                id: 'total_price',
                name: 'Tổng tiền',
                width: 150,
                active: false,
                type: 'number'
            },
            {
                id: 'note',
                name: 'Ghi chú',
                width: 200,
                active: false,
                type: 'text',
            },
            {
                id: 'updated_at',
                name: 'Cập nhật cuối',
                width: 200,
                active: false,
                type: 'text'
            }
        ];
    }

    /**
     * Get viewCreate
     * @public
     */
    public get viewCreate(): Array<any> {
        return [
            {
                id: 'id',
                name: 'Mã đơn',
                type: 'text'
            },
            {
                id: 'id2',
                name: 'Mã đơn2',
                type: 'number',
            },
            {
                id: 'id4',
                name: 'Mã đơn4',
                type: 'number',
            },
            {
                id: 'id3',
                name: 'Mã đơn3',
                type: 'selected',
                data: []
            },
            {
                id: 'id3',
                name: 'Mã đơn3',
                type: 'radio',
                data: []
            },
            {
                id: 'id3',
                name: 'Mã đơn3',
                type: 'checkbox',
                data: []
            }
        ];
    }
}
