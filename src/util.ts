export interface Candidate {
  sdp?: string,
  sdpMLineIndex?: number | null,
  sdpMid?: string | null,
  type: 'candidate',
}
