import { fromJS } from 'immutable';

export default function accessImmutableObject (object, array) {
  const mappedobject = fromJS(object);

  return mappedobject.getIn(array, undefined);
}
