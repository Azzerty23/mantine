import { DefaultMantineNumberSize } from '@mantine/styles';

export interface TransferListItem {
  value: string;
  label: string;
  group?: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];

export interface TransferListItemComponentProps {
  data: TransferListItem;
  selected: boolean;
  radius: DefaultMantineNumberSize;
}

export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
