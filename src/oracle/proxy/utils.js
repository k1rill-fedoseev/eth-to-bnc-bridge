function Ok(data) {
  return { Ok: data }
}

function Err(data) {
  return { Err: data }
}

function decodeStatus(status) {
  switch (status) {
    case 0:
      return 'ready'
    case 1:
      return 'voting'
    case 2:
      return 'keygen'
    case 3:
      return 'funds_transfer'
    default:
      return 'unknown_state'
  }
}

function boundX(x) {
  try {
    return x.toNumber()
  } catch (e) {
    return -1
  }
}

module.exports = {
  Ok,
  Err,
  decodeStatus,
  boundX
}