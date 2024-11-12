import React from 'react';

interface BookerInfo {
  fullName: string;
  email: string;
  phone: string;
}

interface InvoiceInfo {
  buyerName: string;
  company: string;
  taxId: string;
  address: string;
}

interface BookerInfoProps {
  bookerInfo: BookerInfo;
  invoiceInfo: InvoiceInfo;
}

export function BookerInfo({ bookerInfo, invoiceInfo }: BookerInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Thông tin người đặt</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Họ tên</label>
              <p className="font-medium">{bookerInfo.fullName}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <p className="font-medium">{bookerInfo.email}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Số điện thoại</label>
              <p className="font-medium">{bookerInfo.phone}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Thông tin xuất hóa đơn</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600">Người mua hàng</label>
              <p className="font-medium">{invoiceInfo.buyerName}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Đơn vị xuất hóa đơn</label>
              <p className="font-medium">{invoiceInfo.company}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Mã số thuế</label>
              <p className="font-medium">{invoiceInfo.taxId}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Địa chỉ</label>
              <p className="font-medium">{invoiceInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}