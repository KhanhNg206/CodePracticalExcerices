type Status = "open" | "closed" | "busy";

interface CampusService {
  id: string;
  name: string;
  status: Status;
  waitTime?: number;
  locations: string[];
}

function getDisplayText(service: CampusService): string {
  if (service.status === "open") {
    return `${service.name} - Đang mở`;
  }

  if (service.status === "busy") {
    return `${service.name} - Đang đông`;
  }

  return `${service.name} - Đã đóng cửa`;
}