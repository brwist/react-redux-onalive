// @flow
import { shape, string, bool } from 'prop-types';

export const eventShape = shape({
  id: string.isRequired,
  organizer_id: string.isRequired,
  title: string.isRequired,
  image: string.isRequired,
  description: string.isRequired,
  starts_at: string.isRequired,
  ends_at: string.isRequired,
  deleted: bool.isRequired,
  created_at: string.isRequired,
  updated_at: string.isRequired,
  highlighted: bool.isRequired,
});

export type eventShapeFlow = {
  id: string,
  organizer_id: string,
  title: string,
  image: string,
  description: string,
  starts_at: string,
  ends_at: string,
  deleted: boolean,
  created_at: string,
  updated_at: string,
  highlighted: boolean,
};
